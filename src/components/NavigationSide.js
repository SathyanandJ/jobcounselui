import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {  Button, Badge } from 'react-bootstrap';

import '../css/global/App.css'


import appenvironment from '../config/environment.json';

class NavigationSide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPageSelectedNavigationItem : this.props.mainpage_mainnavigation_selected,
            allbranches : this.props.branches,
            branchesInContext : this.props.branches_for_selectedsector,
            currentselectedsidenaigationitem : this.props.currentselectedsidenaigationitem
        }
     }

    componentDidMount(){
        
        if(this.state.allbranches.length === 0){
            axios.get(appenvironment.SERVER_URL+'jobs/branches')
            .then( res => {
                console.log("Logging Branch Response");
                console.log(res.data);
                this.props.updateBranches(res.data);
            })
        }else{
            this.props.updateBranches(this.state.allbranches);
        }
    }


    handleClick = (e) => {
        
        var currentSelectedSector = this.props.mainpage_mainnavigation_selected;
        var currentSelectedBranch = e.target.value;
        var previousSelectedBranch = this.props.currentselectedsidenaigationitem;

        if(previousSelectedBranch === currentSelectedBranch){
            currentSelectedBranch = 0;
            
        }

        this.setState ({
            currentselectedsidenaigationitem: currentSelectedBranch
        })
        console.log('currentSelectedSector : '+currentSelectedSector+' And currentSelectedBranch : '+currentSelectedBranch);
        axios.get(appenvironment.SERVER_URL+'jobs/'+currentSelectedSector+'/'+currentSelectedBranch)
        .then ( res => {
            console.log('Jobs : ' + res.data);            
            this.props.updateJobsBySectorAndBranch(res.data,currentSelectedBranch);
        })
       
    }

    chooseSelectedButtonStyle = (buttonValue) => {
        var buttonIdVar = parseInt(buttonValue,10);
        var currentPageSelectedVar = parseInt(this.props.currentselectedsidenaigationitem,10);
        if(currentPageSelectedVar === buttonIdVar)
            return "leftnavbuttonpropselected"
        else
            return "leftnavbuttonprop"
    }

     render() {
        return (
               
                <div id ="leftnavdiv">

                    <div>
                        <h2>
                            <Badge id ="pagemain-sidenavigation-header" variant="primary">Jobs Filter </Badge>
                        </h2>
                    </div>
                    <div id="pagemain-sidenavigation-branchs-area">
                        {this.props.branches_for_selectedsector.map ( button =>  (
                            <Button variant="success" id = {this.chooseSelectedButtonStyle(button.id)} value = {button.id }  key = {button.id} onClick = { e => this.handleClick(e) }>{ button.name } Jobs</Button>
                        )
                        )}
                    </div>
                           
                </div> 
         
        )
    }
}


const mapStateToStore = (state) => {
    return {
        branches : state.branches,
        mainpage_mainnavigation_selected : state.mainpage_mainnavigation_selected,
        branches_for_selectedsector:state.branches_for_selectedsector,
        currentselectedsidenaigationitem:state.mainpage_sidenavigation_selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBranches : (branchesAsList) => {
            dispatch({type : 'UPDATE_BRANCHES_FROM_REST', data : branchesAsList})
        },
        updateJobsBySectorAndBranch : (jobsAsList,branchselected) => {
            dispatch({type : 'UPDATE_JOBS_FROM_REST', data: jobsAsList , branchclicked:branchselected})
        }
    }
}

export default withRouter(connect(mapStateToStore,mapDispatchToProps)(NavigationSide))