import React , { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';


import '../css/global/App.css'

class JobDetailMainNavigationBar extends Component {
    render () {
        return (
            <div  className="Form" style={{ display: "flex", justifyContent: "center" }}
          >
           
                <Button href="/" id="custom-btn" >Home</Button>
            </div>

        );
    }
}

export default JobDetailMainNavigationBar;