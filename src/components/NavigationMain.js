import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import '../css/global/App.css'


class NavigationMain extends Component {
    componentDidMount(){
              

        axios.get('http://localhost:8080/services/v1/jobs/sectors')
        .then( res  => {
            console.log(res.data)
            this.props.updateSector(res.data);               
        })

    }

    render() {
      
        const { sectors } = this.props;
        console.log({ sectors })

        return (
            <div>
                <hr  id="hr-linebreak-style" />

                <Navbar bg="light" variant="light" id="nav-width">
                    
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home" id ="topnavbuttonprop">Central Government Jobs</Nav.Link> */}
                         <Nav.Link href="#home" id ="topnavbuttonprop">{this.props.posts[0].name} </Nav.Link>
                        <Nav.Link href="#features" id ="topnavbuttonprop">{this.props.posts[1].name}</Nav.Link>
                        <Nav.Link href="#pricing" id ="topnavbuttonprop">{this.props.posts[2].name}</Nav.Link>
                        <Nav.Link href="#pricing" id ="topnavbuttonprop">{this.props.posts[3].name}</Nav.Link>
                        <Nav.Link href="#pricing" id ="topnavbuttonprop">{this.props.posts[4].name}</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
              
            </div>
        )
    }
}

const mapStateToStore = (state) => {
    return {
          posts : state.posts    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSector : (sectorsAsList) => {
            dispatch({type : 'UPDATE_SECTORS_FROM_REST', data: sectorsAsList} )
        }
    }
}

export default withRouter(connect(mapStateToStore,mapDispatchToProps)(NavigationMain))
 