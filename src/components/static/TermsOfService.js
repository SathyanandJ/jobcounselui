import React , { Component } from 'react';

import '../../css/global/aboutpage.css';



class TermsOfService extends Component {

    render () {
        return (
            <div>
                    <nav aria-label="breadcrumb" id="termsofservice" className ="appstatic-breadcrumb-header-textalign">
                        <ol class="breadcrumb" style={{backgroundColor:"#446658"}}>
                            <li class="breadcrumb-item">Terms Of Use
                            </li>
                                
                            
                        </ol>
                    </nav>

                    <h5 className="about-text-format">The website collects and provides information on jobs available in public domain and bears no responsibility whatsoever for such information of third parties made available to the users.
                    </h5>

            </div>
        )
    }
}

export default TermsOfService;