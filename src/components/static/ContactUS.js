import React , { Component } from 'react';

import  '../../css/global/aboutpage.css';



class ContactUS extends Component {

    render () {
        return (
            <div>
                    <nav aria-label="breadcrumb" id="aboutus" className = "appstatic-breadcrumb-header-textalign">
                        <ol class="breadcrumb" style={{backgroundColor:"#446658"}}>
                            <li class="breadcrumb-item"> Contact US 
                            </li>
                                
                            
                        </ol>
                    </nav>

                    <h5 className="about-text-format"> Mail us at jobcounselindia@gmail.com
                    </h5>

            </div>
        )
    }
}

export default ContactUS;