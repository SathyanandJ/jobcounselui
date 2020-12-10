import React , {Component} from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../css/global/App.css';

import { Link }from 'react-router-dom';




class AppHeaderBanner extends Component {


    render(){
        return (
            <nav aria-label="breadcrumb"id="appbanner-nav-breadcrumb">
                <ol class="breadcrumb" id="appbanner-header-textalign">
                    <li class="breadcrumb-item"><Link to = "/jobcounsel/about#aboutus" style={{color:"#ffffff",font:"arial,sans-serif"}}>About US</Link></li>
                    <li class="breadcrumb-item"><Link to = "/jobcounsel/about#contactus" style={{color:"#ffffff",font:"arial,sans-serif"}}>Contact US</Link></li>
                    
                </ol>
            </nav>
        )
    }



}

export default AppHeaderBanner;