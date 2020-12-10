import React , { Component } from 'react';
import { Button} from 'react-bootstrap';

import { Link } from 'react-router-dom'


import '../css/global/aboutpage.css'

class AboutPageMainNavigation extends Component {
    render () {
        return (
            <div className="Form" style={{ justifyContent: "center", padding:"2em 2em"}}>
           
                <Button id="pageabout-mainnavigation-custom-button"><Link to="/jobcounsel" id="pageabout-mainnavigation-custom-link"> Home</Link></Button>
            </div>

        );
    }
}

export default AboutPageMainNavigation;