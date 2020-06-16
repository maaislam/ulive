import React, { Component } from 'react'
import {connect} from 'react-redux';

import {assignTask, taskInput} from  '../actions'

 class AddTask extends Component {


    

    taskInput = (event) => {
        
        this.props.taskInput(event.target.value);
    }

    addTask = () => {

        if (this.props.task!==''){
        this.props.assignTask(this.props.task);
        this.props.taskInput('');
        }
    }


    render() {
        
        return (
            <div>
                <div className="ui input focus">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        onChange = {this.taskInput}
                        value = {this.props.task} />
                </div>
                <button 
                    className="ui primary button" 
                    onClick = {this.addTask}>
                    Add Task
                </button>
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    console.log(state)
    return {
        
        taskList: state.tasks,
        task: state.task
    };
};

export default connect(mapStateToProps, {assignTask, taskInput})(AddTask);