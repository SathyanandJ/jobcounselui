import React , {Component} from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../css/global/App.css';

import { Link } from 'react-router-dom';




class AppFooterBanner extends Component {


    render(){
        return (
            <nav aria-label="breadcrumb" id ="appbanner-footer-textalign">
                <ol class="breadcrumb" style={{backgroundColor:"#446658"}}>
                    <li class="breadcrumb-item"><Link to ="/about#termsofservice" style={{color:"#ffffff",font:"arial,sans-serif", textAlign:"centre"}}>Terms Of Use</Link></li>
      
                    
                </ol>
            </nav>
        )
    }



}

export default AppFooterBanner;