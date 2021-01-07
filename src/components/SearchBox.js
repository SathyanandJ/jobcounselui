import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown ,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import '../css/global/App.css';
import '../css/global/pagemain.css';

import appenvironment from '../config/environment.json';


class SearchBox extends Component{

    constructor(props){
        super(props);
        this.state = {
           
            searchboxtext : '',
            currentPageSelectedNavigationItem : this.props.mainpage_mainnavigation_selected
        }
    }

    componentDidMount(){
        var searchQuery = this.props.searchquery;


        if( typeof searchQuery != 'undefined'){

            
           
            this.setState({
                searchboxtext: searchQuery
            })

            var currentSelectedSector = this.props.mainpage_mainnavigation_selected;
            var searchText = searchQuery;
            axios.get(appenvironment.SERVER_URL+'jobs/search/'+currentSelectedSector+'?searchquery='+searchText)
            .then ( res => {
              this.props.updateJobsForSearchResult(res.data);
            })
            
        }
    }


    handleSearchClick = (e) => {
        var currentSelectedSector = this.props.mainpage_mainnavigation_selected;
        var searchText = this.state.searchboxtext;

        searchText = searchText.replace(/([^a-z0-9 "]+)/gi, "");
        
        axios.get(appenvironment.SERVER_URL+'jobs/search/'+currentSelectedSector+'?searchquery='+searchText)
        .then ( res => {
            this.props.updateJobsForSearchResult(res.data);
        })
        
    }

    handleChange = (e)  => {
        this.setState({ searchboxtext: e.target.value });
        var currentSelectedSector = this.props.mainpage_mainnavigation_selected;
        
        

        if(e.target.value === ""){
       
            axios.get(appenvironment.SERVER_URL+'jobs/'+currentSelectedSector)
            .then( res => {
                this.props.updateJobsForSearchResult(res.data);
            })
        }
    }


    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center"}}>
                                       
                        <input id ="pagemain-navigation-searchbox" value ={this.state.searchboxtext} type="text" placeholder ="Search Jobs By Location, Organization, Qualification" onChange={ this.handleChange }   ></input>
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
