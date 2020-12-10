import React from 'react';
import JobDetailMainNavigationBar from '../components/JobDetailMainNavigationBar';
import JobDetailDataDisplayArea from '../components/JobDetailDataDisplayArea';
import JobDetailsSideNavigation from '../components/JobDetailsSideNavigation';
import HeaderBanner from '../components/AppHeaderBanner';
import FooterBanner from '../components/AppFooterBanner';
import { Container, Row, Col, Table, Button, Nav } from 'react-bootstrap';



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
            <Container fluid >

            <Row>
                
                <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                        <HeaderBanner/>
                 </Col>
            </Row>


            <Row>
                <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                    <div id = "pagedetail-mainnavigation-background">
                        <JobDetailMainNavigationBar/>

                    </div>
                </Col>
            </Row>
            <Row> 
                <Col lg={2} xl={2} md={0} sm ={0} xs={0} className='d-none d-lg-block d-xl-block' >   
                   
                    <JobDetailsSideNavigation/>
                                         
                </Col>
                <Col lg={8} xl={8} md={12} sm={12} xs={12}>
          

                    <div id ="pagedetail-detail-linebreak-style">
                    
                        <JobDetailDataDisplayArea jobid={this.props.match.params.jobid} />

                    </div>
                
                  
                </Col>
                <Col lg={2} xl={2} md={0} sm={0} xs={0}>

                </Col>
            </Row>


            <Row style={{height:"100px"}}></Row>
            <Row>
                <Col lg={12} xl={12} md={12} sm={12} xs={12}>
                    <FooterBanner/>
                </Col>

            </Row>
            <Row style={{height:"100px"}}></Row>

            </Container>
        );
    }
}


export default JobDetail;