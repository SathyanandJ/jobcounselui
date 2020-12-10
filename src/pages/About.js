import React from 'react';
import { Container, Row, Col, Table, Button, Nav } from 'react-bootstrap';
import  AboutSite from '../components/static/SiteAbout.js';
import ContactUS from '../components/static/ContactUS.js'
import TermsOfService from '../components/static/TermsOfService.js'
import HeaderBanner from '../components/AppHeaderBanner.js';
import FooterBanner from '../components/AppFooterBanner.js';
import MainNavigation from '../components/AboutPageMainNavigation';


class About extends React.Component {
    render() {
       return (
         <Container fluid>
            <Row>
                  <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                        <HeaderBanner/>
                 </Col>
            </Row>

            <Row>
               <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                   <div id = "pageabout-mainnavigation-background">
                        <MainNavigation/>
                   </div>
               </Col>
            </Row>

           <Row style ={{paddingTop:"4vw", paddingLeft:"4vw", paddingRight:"4vw", paddingBottom:"2vw"}}>
               <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                  <AboutSite/>
               </Col>
            </Row>

            <Row style ={{padding:"2vw 4vw"}}>
               <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                  <ContactUS/>
               </Col>
            </Row>


            <Row style ={{padding:"4vw 4vw"}}>
               <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                  <TermsOfService/>
               </Col>
            </Row>

            <Row>
                <Col lg={12} xl={12} md={12} sm={12} xs={12}>
                    <FooterBanner/>
                </Col>

            </Row>
            <Row style={{height:"100px"}}></Row>
         </Container>
       )
    }
 }
 export default About;