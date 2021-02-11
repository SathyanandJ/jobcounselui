import React , {Component} from 'react';
import '../css/global/App.css';
import appbannerimg from '../images/appbanner.png'
import {Navbar, Nav, NavItem,Button,Tooltip,OverlayTrigger} from 'react-bootstrap';


import { Link }from 'react-router-dom';

const renderTooltipForSubBtn = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click To Subscribe For Daily Job Notifications
    </Tooltip>
  );

const renderTooltipForSubTxt = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Enter Valid Email Id
    </Tooltip>
  );


class AppHeaderBanner extends Component {


    render(){
        return (

            <div>
                
                <Navbar className="appbanner-nav-breadcrumb">
                    <Nav className="container-fluid">
                        <Nav.Item className="appbanner-header-textalign">
                            <img src={appbannerimg} data-src= {appbannerimg} alt="" style={{width:"1.75em",marginLeft:"0.5em",marginTop:"-0.25em"}}/> JOBCounsel.in
                        </Nav.Item>

                        <Nav.Item>
                             <OverlayTrigger  placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltipForSubTxt}>
                                <input className="appbanner-header-notifications" type="text"  name="name" placeholder="Enter Email Address"/>
                             </OverlayTrigger>
                            <OverlayTrigger  placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltipForSubBtn}>
                              <Button className="appbanner-header-notifications-button" over >Subscribe</Button>
                            </OverlayTrigger>
                        </Nav.Item>
          
                        
                        
                    </Nav>
                </Navbar>
            </div>




            
        )
    }



}

export default AppHeaderBanner;