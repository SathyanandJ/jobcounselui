import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next'; 
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';

import '../css/global/App.css'


const colFormatter = (cell,row) => {
    alert({cell} ,{row});
    return "Hello" ;
}

class JobTable extends Component{
    columnNames = [
        { dataField: 'organizationName', text:'Organization',headerStyle: () => {
            return { width: "15%",textAlign: 'center' };
          } },
        { dataField: 'designation', text:'Designation',  headerStyle: () => {
            return { width: "15%",textAlign: 'center' };
          } },
        { dataField: 'qualification', text:'Qualification',headerStyle: () => {
            return { width: "42%",textAlign: 'center' };
          } },
        { dataField: 'location', text:'Location',headerStyle: () => {
            return { width: "10%",textAlign: 'center' };
          } },
        { dataField: 'jobApplyLastDate', text:'Last Date' ,headerStyle: () => {
            return { width: "10%",textAlign: 'center' };
          }},
        { dataField:'details' , text:'Details',formatExtraData:'' , formatter: (cell, row,rowIndex,formatExtraData) =>  <a href={"jobdetail/"+row.id}> {cell} </a> ,headerStyle: () => {
            return { width: "8%",textAlign: 'center',padding:'10px 0' };
          } },       

      ]
    componentDidMount() {

        axios.get('http://localhost:8080/services/v1/jobs/1')
        .then ( res => {
            console.log('Jobs : ' + res.data);            
            this.props.updateJobs(res.data);
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>

                <BootstrapTable 
                hover
                bordered
                keyField = 'id'
                pagination = { paginationFactory() }
                data = {this.props.jobs}
                columns =  { this.columnNames }
                rowStyle = { { backgroundColor: '#e6f0f0', border: '2px solid e6f0f0' } }
                >
                    

                </BootstrapTable>


            </div>
        )
    }
}



const mapStateToStore = (state) => {
    return {
        jobs : state.jobs
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateJobs : (jobsAsList) => {
            dispatch({type: 'UPDATE_JOBS_FROM_REST',data : jobsAsList})
        }
    }
}


export default withRouter(connect(mapStateToStore,mapDispatchToProps)(JobTable))