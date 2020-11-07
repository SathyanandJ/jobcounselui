import React, {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col, Table, Button, Nav } from 'react-bootstrap';

import '../css/global/App.css'

class NavigationSide extends Component {

    componentDidMount(){

        axios.get('http://localhost:8080/services/v1/jobs/branches')
        .then( res => {
            console.log("Logging Branch Response");
            console.log(res.data);
            this.props.updateBranches(res.data);
        })

    }


    render() {
        return (
               

                <div id ="leftnavdiv">

                    {this.props.branches.map ( button =>  (
                        <Button variant="success" id ="leftnavbuttonprop" key = {button.id}>{ button.name } </Button>
                    )
                    )}
                           
                </div> 

               
        )
    }
}

const mapStateToStore = (state) => {
    return {
        branches : state.branches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBranches : (branchesAsList) => {
            dispatch({type : 'UPDATE_BRANCHES_FROM_REST', data : branchesAsList})
        }
    }
}

export default withRouter(connect(mapStateToStore,mapDispatchToProps)(NavigationSide))