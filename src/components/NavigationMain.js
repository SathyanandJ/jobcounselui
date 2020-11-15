import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import '../css/global/App.css'
import '../css/global/pagemain.css'


class NavigationMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentPageSelectedNavigationItem : this.props.mainpage_mainnavigation_selected
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8080/services/v1/jobs/sectors')
        .then( res  => {
            console.log(res.data)
            this.props.updateSector(res.data);               
        })

    }

    handleClick = (e) => {
       console.log('Clicked :',e.target.value);
       e.target.id="pagemain-navigation-main-custom-btn-selected";
       this.props.updateSelectedSector(e.target.value);
       this.setState({
        currentPageSelectedNavigationItem: e.target.value
       });
       
    }

    chooseSelectedButtonStyle = (buttonId) => {
        var buttonIdVar = parseInt(buttonId,10);
        var currentPageSelectedVar = parseInt(this.state.currentPageSelectedNavigationItem,10);
        console.log("chooseSelectedButtonStyle:",buttonId);
        console.log("chooseSelectedButtonStyle currentPageSelectedNavigationItem:",this.state.currentPageSelectedNavigationItem);
        if(buttonIdVar === currentPageSelectedVar){
            console.log("Returning pagemain-navigation-main-custom-btn-selected for buttonId Selected: ",buttonId  ,this.state.currentPageSelectedNavigationItem);
            return "pagemain-navigation-main-custom-btn-selected";
        }
        else{
            console.log("Returning pagemain-navigation-main-custom-btn for buttonId : ",buttonId  ,this.state.currentPageSelectedNavigationItem);
            return "pagemain-navigation-main-custom-btn";
        }
    }

    render() {
      
        const { sectors } = this.props;
        console.log({ sectors })

        return (
            <div>
                
                
                <div  className="Form" style={{ display: "flex", justifyContent: "left" }}>
           
                    <Button value = { this.props.posts[0].id } id={this.chooseSelectedButtonStyle(this.props.posts[0].id) } onClick = { e => this.handleClick(e)} >{this.props.posts[0].name} </Button>
                    <Button value = { this.props.posts[1].id } id={this.chooseSelectedButtonStyle(this.props.posts[1].id) } onClick = { e => this.handleClick(e)}>{this.props.posts[1].name} </Button> 
                    <Button value = { this.props.posts[2].id } id={this.chooseSelectedButtonStyle(this.props.posts[2].id) } onClick = { e => this.handleClick(e)}>{this.props.posts[2].name} </Button>
                    <Button value = { this.props.posts[3].id } id={this.chooseSelectedButtonStyle(this.props.posts[3].id) } onClick = { e => this.handleClick(e)}>{this.props.posts[3].name} </Button>
                    <Button value = { this.props.posts[4].id } id={this.chooseSelectedButtonStyle(this.props.posts[4].id) } onClick = { e => this.handleClick(e)}>{this.props.posts[4].name} </Button>
                </div>

                {/* <Navbar bg="light" variant="light" id="nav-width">
                    
                    <Nav className="mr-auto">
                        
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
                </Navbar> */}
              
            </div>
        )
    }
}

const mapStateToStore = (state) => {
    return {
          posts : state.posts,
          mainpage_mainnavigation_selected : state.mainpage_mainnavigation_selected   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSector : (sectorsAsList) => {
            dispatch({type : 'UPDATE_SECTORS_FROM_REST', data: sectorsAsList} )
        },
        updateSelectedSector : (selectedSector) => {
            dispatch({type : 'UPDATE_SELECTED_SECTOR_BY_USER', data: selectedSector})
        }
    }
}

export default withRouter(connect(mapStateToStore,mapDispatchToProps)(NavigationMain))
 