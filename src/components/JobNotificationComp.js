import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {  Button, Badge } from 'react-bootstrap';

import '../css/global/App.css'

import appenvironment from '../config/environment.json';


class JobNotificationComponent extends Component {


    constructor(props){
        super(props)
        this.state = {
            jobNotificationsDataInRedux : this.props.jobNotificationsDataAvailableInStore,
            jobNotificationsData:this.props.jobNotificationsData
        }
    }

    componentDidMount(){

        if(!this.state.jobNotificationsDataInRedux){
            axios.get(appenvironment.SERVER_URL+'jobs/messages')
            .then(res => {
                console.log('Job Notification Response')
                console.log(res.data);
                this.props.updateLatestJobNotifications(res.data);
            })
        }

    }

    render(){

        return (
            <div id ="leftnavdiv">

        <div>
            <h2>
                <Badge id ="pagemain-sidenavigation-header" variant="primary">Latest Job Notifications</Badge>
            </h2>
            


        </div>
        
               
    </div> 
        )
    }

    
}

const mapStateToStore =(state) => {
    return {
        jobNotificationsDataAvailableInStore : state.jobNotification_loaded_from_db,
        jobNotificationsData : state.jobNotification_data

    }
}

const mapDispatchToProps = (dispath) => {
    return {
        updateLatestJobNotifications : (jobNotifications) => {
            dispath({type:'UPDATE_LATEST_JOB_NOTIFICATIONS_VIA_REST',data : jobNotifications})
        }
    }
}

export default withRouter(connect(mapStateToStore,mapDispatchToProps)(JobNotificationComponent))