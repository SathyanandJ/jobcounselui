import React , { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/global/App.css'
import '../css/global/pagedetail.css'


class JobDetailsSideNavigation extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
        //console.log('this.props.currentjobdetail'+ this.props.currentjobdetail);
    }


    deriveJobPosting(postingManipulative,posting,isCity){
        if(typeof(posting)!== 'undefined' && typeof(postingManipulative) !== 'undefined'){
            postingManipulative = postingManipulative.toLowerCase();
                if(postingManipulative.includes("india")){
                    if(isCity)
                        return "India";
                    else
                        return '';
                }else if(postingManipulative.includes(",")){
                    const split = posting.split(',');
                    if(isCity)
                        return split[0].trim();

                    else{
                        return split[1].trim();
                    }
                }
                else{
                    if(isCity)
                        return posting.trim();
                    else
                        return '';
                    }
        }
        else
            return posting;
    }

    

   
    render(){

        /* const jobQualificationList = [];
        if(typeof(this.props.currentjobincontext_job_qualification)!=='undefined'){
            var manipulation_qualification = this.props.currentjobincontext_job_qualification;
            const allQualification = ['PhD',' btech',' mtech',' msc',' bsc',' me',' be',' 10th',' 12th',' ssc',' matric',' ca',' mca',' bca',' diploma',' blib',' mlib',' icwa',' icai',' iti',' sslc',' cma'];
            //alert(typeof this.props.currentjobincontext_job_qualification);
            //alert(manipulation_qualification.toLowerCase);
            allQualification.forEach( qualificationItr => {
               // alert(manipulation_qualification +"  |||   " +qualificationItr);
                var strconverted = JSON.stringify(manipulation_qualification)
                if(strconverted.includes(qualificationItr)){
                    
                    jobQualificationList.push(<Link to ={"/home/"+qualificationItr} id ="pagedetail-sidenavigation-custom-link"><Button id="pagedetail-sidenavigation-custom-button" > {qualificationItr} Jobs</Button> </Link>)
                }
            })
        } */


        var cityIdentified = this.deriveJobPosting(this.props.currentjobincontext_job_location,this.props.currentjobincontext_job_location,true)
        var stateIdentified  = this.deriveJobPosting(this.props.currentjobincontext_job_location,this.props.currentjobincontext_job_location,false) 
        var stateLink ='';
        if(typeof(stateIdentified)!= 'undefined' && stateIdentified !=='' )
            stateLink =<Link to ={"/home/"+stateIdentified} id ="pagedetail-sidenavigation-custom-link"><Button id="pagedetail-sidenavigation-custom-button" >Jobs In {this.deriveJobPosting(this.props.currentjobincontext_job_location,this.props.currentjobincontext_job_location,false)}</Button> </Link>
        
        return(
                
                <div  id="pagedetail-sidenavigation-custom-div-alignment">
                  
                  <a href ={this.props.currentjob_org_url} id ="pagedetail-sidenavigation-custom-link" target="_blank" rel="noopener noreferrer">
                  <Button id="pagedetail-sidenavigation-custom-button" >About {this.props.currentjobincontext_org_name}</Button> </a>
                 
                  <Link to ={"/home/"+this.props.currentjobincontext_org_name} id ="pagedetail-sidenavigation-custom-link">
                  <Button id="pagedetail-sidenavigation-custom-button" >{this.props.currentjobincontext_org_name} Jobs</Button> </Link>
                 
                  <Link to ={"/home/"+this.props.currentjobincontext_job_branchname} id ="pagedetail-sidenavigation-custom-link"> 
                  <Button id="pagedetail-sidenavigation-custom-button" >{this.props.currentjobincontext_job_branchname} Jobs </Button> </Link>
                
                  <Link to ={"/home/"+cityIdentified} id ="pagedetail-sidenavigation-custom-link">
                  <Button id="pagedetail-sidenavigation-custom-button" >Jobs In {cityIdentified}</Button> </Link>
                    
                  {stateLink}

                    
              </div>
        )
    }
}

const mapStateToStore = (state) => {
    return {
        currentjobincontext_job_id : state.jobsdetail.id,
        currentjobincontext_org_name : state.jobsdetail.organizationName,
        currentjobincontext_job_branchname: state.jobsdetail.branchName,
        currentjobincontext_job_location: state.jobsdetail.jobLocation,
        currentjobincontext_job_qualification : state.jobsdetail.qualification,
        currentjob_org_url : state.jobsdetail.organizationURL
    }
}
export default withRouter(connect(mapStateToStore)(JobDetailsSideNavigation));