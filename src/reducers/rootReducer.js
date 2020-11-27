import Axios from "axios"
import { act } from "react-dom/test-utils"

const initState = {
    posts :[
        
            {"id":1,"name":"Government Jobs"},
            {"id":2,"name":"Public Sector Jobs"},
            {"id":3,"name":"Private Sector(Non-IT) Jobs"},
            {"id":4,"name":"Private Sector(IT) Jobs"},
            {"id":5,"name":"State Government Jobs"}
        
    ],

    branches : [

    ],

    branches_for_selectedsector : [

    ],

    jobs :[
        {"id":2,"organizationName":"Bank Of India(BoI)","branchName":"Bank","salaryPerMonth":500000,"designation":"Senior Manager","qualification":"The applicant should either be a retired or serving officer not below the rank of General Manager.","location":"India","jobApplyLastDate":"2020-09-25"},
        {"id":3,"organizationName":"Bank Of India(BoI)","branchName":"Bank","salaryPerMonth":2000000,"designation":"Senior Ombudsman Manager","qualification":"The applicant should either be a retired or serving officer not below the rank of General Manager.","location":"Mumbai","jobApplyLastDate":"2020-09-25"},
        {"id":4,"organizationName":"Bank Of India(BoI)","branchName":"Bank","salaryPerMonth":2000000,"designation":"Senior Ombudsman Manager","qualification":"The applicant should either be a retired or serving officer not below the rank of General Manager.","location":"Bengaluru","jobApplyLastDate":"2020-09-25"},
        {"id":5,"organizationName":"Bank Of India(BoI)","branchName":"Bank","salaryPerMonth":45000,"designation":"Clerk","qualification":"The applicant should be less than 30 years of age.","location":"India","jobApplyLastDate":"2020-11-25"},
        {"id":6,"organizationName":"Bank Of India(BoI)","branchName":"Bank","salaryPerMonth":75000,"designation":"Probationary Officer","qualification":"The applicant should be less than 30 years of age.","location":"Delhi","jobApplyLastDate":"2020-11-30"}
    ],

    jobsdetail:[
        {"id":4,"organizationName":"Bank Of India(BoI)","branchName":"Bank","salaryPerMonth":2000000,"designation":"Senior Ombudsman Manager","qualification":"The applicant should either be a retired or serving officer not below the rank of General Manager.","description":"Appointment of Internal Ombudsman","eligibilityCriteria":"Should have a minimum of 7 years in areas such as Banking, Regulation, Supervision, Payment etc. Should satisfy as per the criteria laid out by Internal Ombudsman Scheme 2018 of RBI. Age should not be above 70","jobLocation":"Bengaluru","jobdetailslnk":"https://www.bankofindia.co.in/pdf/Notice15719.pdf","jobapplylnk":"https://www.bankofindia.co.in/pdf/Application15719.pdf","jobApplyLastDate":"2020-09-25","selectionProcess":"Short listing and personal Interview. Final selection will be on the basis of marks secured by the candidate in the interview in order of merit.","totalVacancies":50,"jobType":"PERMANENT","dateAdded":"2020-10-18T19:32:04.000+0000"}
    ],

    mainpage_mainnavigation_selected:1,

}

const rootReducer = (state = initState,action) => {
   
    if(action.type === 'UPDATE_SECTORS_FROM_REST'){
        
        return{
            ...state,
            posts:action.data
        }
        
    }
    else if (action.type === 'UPDATE_BRANCHES_FROM_REST'){
        var dataAsInt = parseInt(initState.mainpage_mainnavigation_selected,10);
        initState.branches = action.data;
        var selectedBranches = action.data.filter(obj => obj.sectorId === dataAsInt);
        return {
            ...state,
            branches:action.data,
            branches_for_selectedsector: selectedBranches
        }
    }

    else if (action.type === 'UPDATE_BRANCHES_FOR_SELECTEDSECTOR'){
        return {
            ...state,
            branches:action.data
        }
    }

    else if(action.type === 'UPDATE_JOBS_FROM_REST'){
        return{
            ...state,
            jobs:action.data
        }
    }

    else if(action.type === 'GET_JOBDETAIL_FROM_REST'){
        return{
            ...state,
            jobsdetail:action.data
        }
    }

    else if(action.type === 'UPDATE_SELECTED_SECTOR_BY_USER'){
        var dataAsInt = parseInt(action.data,10);
        var selectedBranches = initState.branches.filter(obj => obj.sectorId === dataAsInt);
        return{
            ...state,
            mainpage_mainnavigation_selected:action.data,
            branches_for_selectedsector: selectedBranches
        }
    }
    
     return state;
}

export default rootReducer