import React, { Component } from 'react';
import NavigationMain from '../../components/NavigationMain';
import { Container, Row, Col, ButtonGroup, Button, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

class BankJobMain extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NavigationMain />
                </Col>
            </Row>
            <Row> 
                <Col xs={2} >
                    <div>
                        <Nav defaultActiveKey="/home" id="app-button-outlay-weight" >
                            
                            <Nav.Link href="/home" id="app-button-weight"><Link to="#bankcurrentopenings">Current Openings</Link></Nav.Link>
                            
                            <Nav.Link eventKey="link-1" id="app-button-weight"><Link to="#banklatestnews">Latest News</Link></Nav.Link>
                            <Nav.Link eventKey="link-2" id="app-button-weight"><Link to="#exampreparation">Exam Preparation</Link></Nav.Link>
                            <Nav.Link eventKey="link-2" id="app-button-weight">Exam Result</Nav.Link>
                            <Nav.Link eventKey="link-2" id="app-button-weight">Mock Tests</Nav.Link>
                            <Nav.Link eventKey="link-2" id="app-button-weight">What To Learn</Nav.Link>
                            <Nav.Link eventKey="link-2" id="app-button-weight">Previous Exam Papers</Nav.Link>

                        </Nav>
                    </div>

                </Col>
                <Col xs={8}>
                    <div>
                        <div id="bankcurrentopenings">
                            <span id="app-page-text-header-style">
                                <h5 id="app-page-text-header-style"><p id= "currentopenings">Current Openings </p></h5>
                            </span>
                            Current Opening In Banks<br/><br/>
                            
                            <u>State Bank Of India (SBI):</u> <br/><br/>
                            <div>
                                RECRUITMENT OF SPECIALIST CADRE OFFICER – SME CREDIT ANALYST <br/><br/>
                                Total Positions : 20 <br/><br/>
                                Basic Qualification : CA/ MBA (Finance) / PGDM (Finance)
                                    /PGDBM(Finance) or equivalent post graduation
                                    degree (Two years full time regular course) from
                                    Recognized University/College  <br/><br/>

                                <a href= "https://www.sbi.co.in/documents/77530/400725/2206201827-Advt.+SCO-2020-21-19.pdf/3b24b5b2-ceb3-61ef-846a-d2d85fb9c3e7?t=1592830675863" target="_blank">Click Here To View The Advertisement</a>
                                <br/><br/>

                                <a href= "https://recruitment.bank.sbi/crpd-sco-2020-21-19/apply" target="_blank">Click Here To Apply</a>
                                <br/><br/> 
                            </div>
                            <hr  id="hr-linebreak-style-page-simple" />
                            <div>
                                 RECRUITMENT OF SPECIALIST CADRE OFFICERS – PRODUCT MANAGER, MANAGER(DATA ANALYST) AND MANAGER (DIGITAL MARKETING)<br/><br/>
                                Total Positions : 9 (Product Manager : 6, Manager(Analyst) : 2 , Manager(Marketing) : 1 )<br/><br/>
                                Basic Qualification(Product Manager) : B.E./B. Tech in Computer Science/
                                    Information Technology/Electronics &
                                    Communication/Electrical & Electronics
                                    from recognized University/Institution  <br/><br/>

                                Basic Qualification(Manager) : Bachelor’s degree in Statistics,
                                    Economics, Mathematics or Computer
                                    Science from recognized
                                    University/Institute  <br/><br/>

                                Basic Qualification(Digital Marketing) : MBA(Marketing)/PGDM(Marketing)/
                                PGDBM (Marketing)/MMS (Marketing)
                                from recognized University/ Institute <br/><br/>

                                <a href= "https://www.sbi.co.in/documents/77530/400725/2206201827-Advt.+SCO-2020-21-18.pdf/afb97e11-94be-df9b-659e-2a66e2e706db?t=1592830707858" target="_blank">Click Here To View The Advertisement</a>
                                <br/><br/>

                                <a href= "https://recruitment.bank.sbi/crpd-sco-2020-21-18/apply" target="_blank">Click Here To Apply</a>
                                <br/><br/> 
                            </div>
                            <hr  id="hr-linebreak-style-page-simple" />
                            
                        </div>
                        <div>
                           

                        </div>


                        <div id="banklatestnews">
                            <span id="app-page-text-header-style">
                                <h5 id="app-page-text-header-style"><p id= "latestnews">Latest News </p></h5>
                            </span>

                            Total Bank Openings: 35 <br/><br/> 
                            Bank Result
                            Bank Current Openings
                            Reselt Announcement Date

                        </div>
                        <div>
                           

                        </div>



                        <div>
                            <span id="app-page-text-header-style">
                                <h5 id="app-page-text-header-style"><p id= "exampreparation">Exam Preparation</p></h5>
                            </span>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                </Col>
                <Col xs={2}>

                </Col>
            </Row>

        </Container>
        )
    }

}
export default BankJobMain;