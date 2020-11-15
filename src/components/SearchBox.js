import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import '../css/global/App.css'
import '../css/global/pagemain.css'


class SearchBox extends Component{

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                
                        
                        <input id ="pagemain-navigation-searchbox" type="text" placeholder ="Search" ></input>
                        <Button id="pagemain-navigation-searchbox-btn">Search</Button>
                

            </div>
        )
    }

}

export default SearchBox;