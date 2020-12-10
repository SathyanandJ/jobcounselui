import React from 'react';
import NavigationMain  from '../components/NavigationMain';
import NavigationSide from '../components/NavigationSide'
import SearchBox from '../components/SearchBox';
import JobTable from '../components/JobTable';
import HeaderBanner from '../components/AppHeaderBanner';
import FooterBanner from '../components/AppFooterBanner';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/global/pages.css';
import '../css/global/pagemain.css'




class Home extends React.Component {

    searchquery=""

    componentDidMount(){
      
        this.searchquery=this.props.match.params.searchquery;
       
        if( typeof this.searchquery != "undefined"){
            
        }
        
    }

    render() {
        return (

            <Container fluid>
            
            <Row>
                
                <Col lg={12} xl={12} md={12} sm={12} xs ={12}>
                        <HeaderBanner/>
                 </Col>
            </Row>
            <div id="pagemain-mainnavigation-background">
                <Row>
                    <Col lg={2} xl={2} md={0} sm={0} >   

                    </Col>
                    <Col lg={8} xl={8} md={12} sm={12} >
                        <Row  lg={12} xl={12} md={12} sm={12}>
                            <NavigationMain />
                        </Row>
                        <Row>
                            <Col>
                                <SearchBox searchquery={this.props.match.params.searchquery}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} xl={2} md={0} sm={0}>   

                    </Col>
                </Row>
            </div>
            
            <Row> 
                <Col lg={2} xl={2} md={0} sm ={0} xs={0} className='d-none d-lg-block d-xl-block'>   
                   
                        <div id ="pirate">
                                  <NavigationSide/>
                        </div>
                   
                </Col>
                <Col lg={8} xl={8} md={12} sm={12} xs={12}>

                    <div>
                        <JobTable searchquery={this.props.match.params.searchquery}/>    

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

export default Home;