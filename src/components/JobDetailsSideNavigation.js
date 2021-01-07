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

    render(){
        return(
                
                <div  id="pagedetail-sidenavigation-custom-div-alignment">
                  
                  <a href ={this.props.currentjob_org_url} id ="pagedetail-sidenavigation-custom-link">
                  <Button id="pagedetail-sidenavigation-custom-button" >About {this.props.currentjobincontext_org_name}</Button> </a>
                 
                  <Link to ={"/home/"+this.props.currentjobincontext_org_name} id ="pagedetail-sidenavigation-custom-link">
                  <Button id="pagedetail-sidenavigation-custom-button" >More Jobs With {this.props.currentjobincontext_org_name}</Button> </Link>
                 
                  <Link to ={"/home/"+this.props.currentjobincontext_job_branchname} id ="pagedetail-sidenavigation-custom-link"> 
                  <Button id="pagedetail-sidenavigation-custom-button" >More {this.props.currentjobincontext_job_branchname} Jobs </Button> </Link>
                
                  <Link to ={"/home/"+this.props.currentjobincontext_job_location} id ="pagedetail-sidenavigation-custom-link">
                  <Button id="pagedetail-sidenavigation-custom-button" >More Jobs In {this.props.currentjobincontext_job_location}</Button> </Link>
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
        currentjob_org_url : state.jobsdetail.organizationURL
    }
}
export default withRouter(connect(mapStateToStore)(JobDetailsSideNavigation));