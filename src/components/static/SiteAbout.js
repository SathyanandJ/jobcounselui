import React , { Component } from 'react';

import '../../css/global/aboutpage.css';



class SiteAbout extends Component {

    render () {
        return (
            <div>
                    <nav aria-label="breadcrumb" id="aboutus" className ="appstatic-breadcrumb-header-textalign">
                        <ol class="breadcrumb" style={{backgroundColor:"#446658"}}>
                            <li class="breadcrumb-item">About US
                            </li>
                                
                            
                        </ol>
                    </nav>

                    <h5 className ="about-text-format">Our aim / mission is to collect and make available information on all Indian Jobs available in the public domain under a single platform for easy usage and accessibility.
                    </h5>

            </div>
        )
    }
}

export default SiteAbout;