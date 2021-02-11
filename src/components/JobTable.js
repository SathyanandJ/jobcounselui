import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next'; 
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Link} from 'react-router-dom';

import '../css/global/App.css'
import '../css/global/pagemain.css'

import appenvironment from '../config/environment.json';



const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );

const pageChange = (newPageNo) => {
  window.scrollTo(0, 0);
}
  
const pageOptions = {
    paginationSize: 14,
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
    onPageChange: pageChange,
    disablePageTitle: true,
    sizePerPageList: [ {
      text: '15', value: 15
    }] // A numeric array is also available. the purpose of above example is custom the text
  };



  const noDataToShow = () => (
    <span>
      oops !!!  No Jobs To Show
    </span>
  );

class JobTable extends Component{


      constructor(props) {
        super(props);
        this.state = {
          currentselectedsector: this.props.currentselectedsector
        }
    }
        
      
    columnNames = [
        
        { dataField: 'organizationName', text:'Organization', formatter: (cell, row,rowIndex,formatExtraData) => <span className="mainpage-table-txt-design">{row.organizationName}</span>
            ,headerStyle: () => {
            return { width: "20%",textAlign: 'center', padding:'0.1em 0.1em',backgroundColor:'#446658',border:'2px solid black' ,color:'#ffff', font:'Lato bold,sans-serif !important', fontSize:'1em'};
          } },
        { dataField: 'designation', text:'Designation',  formatter: (cell, row,rowIndex,formatExtraData) => <span className="mainpage-table-txt-design">{row.designation}</span>
            ,headerStyle: () => {
            return { width: "15%",textAlign: 'center',padding:'0.1em 0.1em', backgroundColor:'#446658',border:'2px solid black' ,color:'#ffff' , font: 'Lato bold,sans-serif !important', fontSize:'1em' };
          } },
        { dataField: 'qualification', text:'Qualification',formatter: (cell, row,rowIndex,formatExtraData) => <span className="mainpage-table-txt-design">{row.qualification}</span>
            ,headerStyle: () => {
            return { width: "37%",textAlign: 'center', padding:'0.1em 0.1em', backgroundColor:'#446658',border:'2px solid black',color:'#ffff' , font: 'Lato bold,sans-serif !important', fontSize:'1em' };
          } },
        { dataField: 'location', text:'Location',formatter: (cell, row,rowIndex,formatExtraData) => <span className="mainpage-table-txt-design">{row.location}</span>
            ,headerStyle: () => {
            return { width: "10%",textAlign: 'center', padding:'0.1em 0.1em',backgroundColor:'#446658',border:'2px solid black' ,color:'#ffff', font:'Lato bold,sans-serif !important', fontSize:'1em' };
          } },
        { dataField: 'jobApplyLastDate', text:'Last Date' ,formatter: (cell, row,rowIndex,formatExtraData) => <span className="mainpage-table-txt-design">{row.jobApplyLastDate}</span>
            ,headerStyle: () => {
            return { width: "10%",textAlign: 'center',padding:'0.1em 0.1em', backgroundColor:'#446658',border:'2px solid black',color:'#ffff' , font:'Lato bold,sans-serif !important', fontSize:'1em' };
          }},
        { dataField:'details' , text:'Details',formatExtraData:'' , formatter: (cell, row,rowIndex,formatExtraData) =>  <Link to={"/jobdetail/"+row.id+"/"+row.designation+"/"+row.organizationName}> <button type="button" id ="pagemain-jobtable-details-btn">
             {cell} </button> </Link> ,headerStyle: () => {
            return { width: "8%",textAlign: 'center',padding:'0.1em 0.1em',backgroundColor:'#446658',border:'2px solid black',color:'#ffff' , font:'Lato bold,sans-serif !important', fontSize:'1em'};
          } },       

      ]
    componentDidMount() {
       var searchQuery = this.props.searchquery;

       if( typeof searchQuery == 'undefined'){
          axios.get(appenvironment.SERVER_URL+'jobs/'+this.state.currentselectedsector)
          .then ( res => {
              console.log('Jobs : ' + res.data);            
              this.props.updateJobs(res.data);
          })
      }
      window.scrollTo(0, 0);
    }

    render() {
      
      document.title="India Government Jobs Recruitment Career Public Sector Jobs State Government Jobs";
      document.getElementsByTagName("META")[3].content ="India Government Jobs Recruitment Career Public Sector Jobs State Government Jobs";

        return (
           <div>     
            <div style={{ marginTop: 10 }}>

                <BootstrapTable 
                hover
                bordered
                keyField = 'id'
                pagination = { paginationFactory(pageOptions) }
                data = {this.props.jobs}    
                columns =  { this.columnNames }
                rowStyle = { { backgroundColor: '#F4FBFE' } }
                wrapperClasses="table-responsive"
                noDataIndication = {noDataToShow()}
                headerWrapperClasses = ""
                >
                  </BootstrapTable>
            </div>
          </div>
        )
    }
}



const mapStateToStore = (state) => {
    return {
        jobs : state.jobs,
        currentselectedsector: state.mainpage_mainnavigation_selected
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