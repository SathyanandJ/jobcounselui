import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next'; 
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';

import '../css/global/App.css'
import '../css/global/pagemain.css'



const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );
  
const pageOptions = {
    paginationSize: 19,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Previous',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [ {
      text: '10', value: 10
    }] // A numeric array is also available. the purpose of above example is custom the text
  };

class JobTable extends Component{

         
    columnNames = [
        { dataField: 'organizationName', text:'Organization',headerStyle: () => {
            return { width: "15%",textAlign: 'center',backgroundColor:'#446658',border:'2px solid black' ,color:'#ffff', font:'100% arial,sans-serif' };
          } },
        { dataField: 'designation', text:'Designation',  headerStyle: () => {
            return { width: "15%",textAlign: 'center',backgroundColor:'#446658',border:'2px solid black' ,color:'#ffff' , font:'100% arial,sans-serif' };
          } },
        { dataField: 'qualification', text:'Qualification',headerStyle: () => {
            return { width: "42%",textAlign: 'center',backgroundColor:'#446658',border:'2px solid black',color:'#ffff' , font:'100% arial,sans-serif' };
          } },
        { dataField: 'location', text:'Location',headerStyle: () => {
            return { width: "10%",textAlign: 'center',backgroundColor:'#446658',border:'2px solid black' ,color:'#ffff', font:'100% arial,sans-serif'};
          } },
        { dataField: 'jobApplyLastDate', text:'Last Date' ,headerStyle: () => {
            return { width: "10%",textAlign: 'center',backgroundColor:'#446658',border:'2px solid black',color:'#ffff' , font:'100% arial,sans-serif' };
          }},
        { dataField:'details' , text:'Details',formatExtraData:'' , formatter: (cell, row,rowIndex,formatExtraData) =>  <a href={"jobdetail/"+row.id}> <button type="button" id ="pagemain-jobtable-details-btn">
             {cell} </button> </a> ,headerStyle: () => {
            return { width: "8%",textAlign: 'center',padding:'10px 0',backgroundColor:'#446658',border:'2px solid black',color:'#ffff' , font:'100% arial,sans-serif'};
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
                pagination = { paginationFactory(pageOptions) }
                data = {this.props.jobs}    
                columns =  { this.columnNames }
                rowStyle = { { backgroundColor: '#F4FBFE' } }
                
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