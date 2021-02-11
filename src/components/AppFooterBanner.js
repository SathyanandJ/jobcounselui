import React , {Component} from 'react';
import '../css/global/App.css';

import { Link } from 'react-router-dom';




class AppFooterBanner extends Component {


    render(){
        return (
            <nav aria-label="breadcrumb" id ="appbanner-footer-textalign">
                <ol class="breadcrumb" style={{backgroundColor:"#446658"}}>
                    <li class="breadcrumb-item"><Link to ="/about#termsofservice" style={{color:"#ffffff",font:"arial,sans-serif", textAlign:"centre"}}>Terms Of Use</Link></li>
                    <li class="breadcrumb-item"><Link to = "/about#aboutus" style={{color:"#ffffff",font:"arial,sans-serif"}}>About US</Link></li>
                    <li class="breadcrumb-item"><Link to = "/about#contactus" style={{color:"#ffffff",font:"arial,sans-serif"}}>Contact US</Link></li>
                    
                </ol>
            </nav>
        )
    }



}

export default AppFooterBanner;