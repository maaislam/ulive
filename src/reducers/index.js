
import {  combineReducers  } from 'redux';


const assignedTaskReducer = (taskList = [], action) =>{

    if (action.type==='TASK_ASSIGNED'){
        return [...taskList,action.payload];
    }

    return taskList;
};

const typedTaskReducer = (task = '', action) =>{

    if (action.type==='TASK_INPUT'){
        return action.payload;
    }

    return task;
};








export default combineReducers({
    taskList: assignedTaskReducer,
    task: typedTaskReducer
});