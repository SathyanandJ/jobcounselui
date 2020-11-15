import React , { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';

import '../css/global/App.css'
import '../css/global/pagedetail.css'


class JobDetailsSideNavigation extends Component{

    render(){
        return(

                <div  id="pagedetail-sidenavigation-custom-div-alignment">
             
                  <Button href="/" id="pagedetail-sidenavigation-custom-button" >About Organization</Button>
                  <Button href="/" id="pagedetail-sidenavigation-custom-button" >Cracking A Banking Exam</Button>
                  <Button href="/" id="pagedetail-sidenavigation-custom-button" >Previous Years Question Papers</Button>
                  <Button href="/" id="pagedetail-sidenavigation-custom-button" >Similar Jobs</Button>
              </div>

        )
    }
}


export default JobDetailsSideNavigation;