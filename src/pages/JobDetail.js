import React from 'react';
import NavigationMain  from '../components/NavigationMain';
import JobDetailMainNavigationBar from '../components/JobDetailMainNavigationBar';
import JobDetailDataDisplayArea from '../components/JobDetailDataDisplayArea';
import JobDetailsSideNavigation from '../components/JobDetailsSideNavigation';
import { Container, Row, Col, Table, Button, Nav } from 'react-bootstrap';


import '../css/global/pages.css';
import '../css/global/pagedetail.css';


class JobDetail extends React.Component{
    
    jobidToFetchDetails = 0;
    

    componentDidMount(){
        console.log(window.location.href);
        console.log(window.location.pathname);
        console.log(this.props.match.params.jobid);
        this.jobidToFetchDetails= this.props.match.params.jobid;      
        
    }

    render() {
        
        return (
            <Container fluid id="app-continer-all-pages-style">

            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                     <hr  id="hr-linebreak-style" />
                </Col>
            </Row>
            <Row>
                <Col>
                <div id = "pagedetail-mainnavigation-background">
                        <JobDetailMainNavigationBar/>

                    </div>
                </Col>
            </Row>
            <Row> 
                <Col xs={2} >   
                    <JobDetailsSideNavigation/>
                       
                   
                </Col>
                <Col xs={8}>
          

                    <div id ="pagedetail-detail-linebreak-style">
                    
                        <JobDetailDataDisplayArea jobid={this.props.match.params.jobid} />

                    </div>
                
                  
                </Col>
                <Col xs={2}>

                </Col>
            </Row>

            </Container>
        );
    }
}


export default JobDetail;