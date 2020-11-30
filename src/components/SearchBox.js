import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import '../css/global/App.css'
import '../css/global/pagemain.css'


class SearchBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchboxtext : '',
            currentPageSelectedNavigationItem : this.props.mainpage_mainnavigation_selected
        }
    }

    handleSearchClick = (e) => {
        var currentSelectedSector = this.props.mainpage_mainnavigation_selected;
        var searchText = this.state.searchboxtext;
        axios.get('http://localhost:8080/services/v1/jobs/search/'+currentSelectedSector+'?searchquery='+searchText)
        .then ( res => {
            console.log('Jobs : ' + res.data);            
            this.props.updateJobsForSearchResult(res.data);
        })
    }

    handleChange = (e)  => {
        this.setState({ searchboxtext: e.target.value });
    }


    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                                       
                        <input id ="pagemain-navigation-searchbox" type="text" placeholder ="Search Jobs By Location, Organization, Qualification" onChange={ this.handleChange }   ></input>
                        <Button id="pagemain-navigation-searchbox-btn" onClick = {this.handleSearchClick}>Search</Button>
                
            </div>
        )
    }

}

const mapStateToStore = (state) => {
    return {
        mainpage_mainnavigation_selected : state.mainpage_mainnavigation_selected   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateJobsForSearchResult : (jobsAsList) => {
            dispatch({type : 'UPDATE_JOBS_FROM_REST', data: jobsAsList })
        }
    }
}

export default withRouter(connect(mapStateToStore,mapDispatchToProps)(SearchBox))
