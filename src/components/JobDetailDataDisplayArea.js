import React , { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import BorderWrapper from 'react-border-wrapper'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import '../css/global/App.css'
import '../css/global/pagedetail.css'
import { connect } from 'react-redux';

import appenvironment from '../config/environment.json';



class JobDetailDataDisplayArea extends Component {

    constructor(props){
        super(props);
        this.state = {
            jobidtogetdetails:4
        };
    }

    renderTextAsList(textArray){
        if(textArray){
            return(
                textArray.map((text,index) => (
                  <li key={index}>{text}</li>
                )
            ));
        }
    }

    deriveSalaryInfo(salary){
        if(salary < 100){
            if(salary === 1){
                return "Negotiable";
            }
            else if( salary === 2){
                return "Salary Depends on Eligibility such as last drawn Pay, Experience. etc";
            }else if( salary === 3) {
                return "Salary Based On Apprentice Act 1961";
            }
        }else{
            return salary + " INR";
        }
    }

    componentDidMount(){
        console.log("State:" +this.props.currentlyselectedsector);
        var jobidtogetdetails = this.props.jobid;
        console.log('Fetching Job Details For JobId :'+jobidtogetdetails)
        axios.get(appenvironment.SERVER_URL +'jobs/' + jobidtogetdetails + '/detail')
        .then( res  => {
            console.log(res.data)
            this.props.upgateJobDetail(res.data);               
        })
    }


    render() {

        return (
            <div id="pagedetail-pagecontent-div-wholepage">
            <BorderWrapper rightOffset='100px' >
            <div >

            <div >
                
                <div id="pagedetail-pagecontent-text-content-title"> 

                  {this.props.jobsdetail.jobTitle}
                
                </div>
            </div>
                
            <div >
                <div id="pagedetail-pagecontent-text-header">
                     Organization:
                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.props.jobsdetail.organizationName}
                
                </div>
            </div>
                
            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Salary (per Month):

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.deriveSalaryInfo(this.props.jobsdetail.salaryPerMonth)}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Designation:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.props.jobsdetail.designation}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Qualification:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 
                        
                        {this.renderTextAsList(this.props.jobsdetail.qualification)}
                        
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Description:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.renderTextAsList(this.props.jobsdetail.description)}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Eligibility To Apply:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.renderTextAsList(this.props.jobsdetail.eligibilityCriteria)}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Job Posting:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.props.jobsdetail.jobLocation}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Selection Process:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.renderTextAsList(this.props.jobsdetail.selectionProcess)}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Total Vacancies:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.props.jobsdetail.totalVacancies}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Job Type:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.props.jobsdetail.jobType}
                
                </div>
            </div>

            <div >
                <div id="pagedetail-pagecontent-text-header">
                    Last Date To Apply:

                </div>
                <div id="pagedetail-pagecontent-text-content"> 

                    {this.props.jobsdetail.jobApplyLastDate}
                
                </div>
            </div>

            <div id ="pagedetail-pagecontent-button-content">

                <div id ="pagedetail-pagecontent-button-content-left">
                        <Button href= {this.props.jobsdetail.jobdetailslnk} target = "_blank" id="pagedetail-pagecontent-button-custom-btn" >View Advertisement</Button>
                               

                </div>
                <div id ="pagedetail-pagecontent-button-content-right">
                                <Button href= {this.props.jobsdetail.jobapplylnk} target="_blank" id="pagedetail-pagecontent-button-custom-btn" >Click To Apply</Button>
                               
                </div>

            </div>

            <div id="pagedetail-pagecontent-zeroopaquetext">
                    This text is for the purposing of ensuring the page border is rendered in full. This text should not be deleted. This text is for the purposing of ensuring the page border is rendered in full. This text should not be deleted.                                                                                                                        
            </div>
            
            </div>
            </BorderWrapper>
            </div>
        )

    }
}

const mapStateToStore = (state) => {
    return {
        jobsdetail: state.jobsdetail,
        currentlyselectedsector: state.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        upgateJobDetail : (jobDetailData) => {
            dispatch({type : 'GET_JOBDETAIL_FROM_REST', data:jobDetailData})
        }
    }
}

export default withRouter(connect(mapStateToStore,mapDispatchToProps)(JobDetailDataDisplayArea)) ;