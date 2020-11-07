import React from 'react';
import NavigationMain  from '../components/NavigationMain';
import NavigationSide from '../components/NavigationSide'
import JobTable from '../components/JobTable'
import { Container, Row, Col, Table, Button, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import '../css/global/pages.css';




class Home extends React.Component {

    render() {
        return (

            <Container fluid id="app-continer-all-pages-style">
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
                   
                        <div id ="pirate">
                                  <NavigationSide/>
                        </div>
                   
                </Col>
                <Col xs={8}>

                    <div>
                        <JobTable/>    

                    </div>
                  
                </Col>
                <Col xs={2}>

                </Col>
            </Row>

        </Container>

        );
    }
}

export default Home;