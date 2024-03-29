import Axios from "axios"
import { act } from "react-dom/test-utils"

const initState = {
    posts :[
        
            {"id":1,"name":"Government Jobs"},
            {"id":2,"name":"Public Sector Jobs"},
            {"id":3,"name":"State Government Jobs"},
            {"id":4,"name":"Private Sector(Non-IT) Jobs"},
            {"id":5,"name":"Private Sector(IT) Jobs"}
        
    ],

    branches : [

    ],

    branches_for_selectedsector : [

    ],

    jobs :[],

    jobsdetail:[
        ],

    mainpage_mainnavigation_selected:1,

    mainpage_sidenavigation_selected:0,

    jobNotification_loaded_from_db:false,

    jobNotification_data :[

    ]

}

const rootReducer = (state = initState,action) => {
   
    if(action.type === 'UPDATE_SECTORS_FROM_REST'){
        
        return{
            ...state,
            posts:action.data
        }
        
    }
    else if (action.type === 'UPDATE_BRANCHES_FROM_REST'){
        var dataAsInt = parseInt(state.mainpage_mainnavigation_selected,10);
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
            jobs:action.data,
            mainpage_sidenavigation_selected:action.branchclicked
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
            mainpage_mainnavigation_selected:dataAsInt,
            branches_for_selectedsector: selectedBranches,
            mainpage_sidenavigation_selected:0
            
        }
    }

    else if(action.type === 'UPDATE_LATEST_JOB_NOTIFICATIONS_VIA_REST'){
        return{
            ...state,
            jobNotification_loaded_from_db:true,
            jobNotification_data : action.data
        }
    }
    
     return state;
}

export default rootReducer