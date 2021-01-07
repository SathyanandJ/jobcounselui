import React , { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import '../css/global/App.css'

class JobDetailMainNavigationBar extends Component {
    render () {
        return (
            <div  className="Form" style={{ justifyContent: "center" ,padding:"2em 2em"}}>
           
                <Button id="pagedetail-mainnavigation-custom-button" ><Link to ="/home" id="jobdetail-mainnavigation-custom-link">Home</Link></Button>
            </div>

        );
    }
}

export default JobDetailMainNavigationBar;