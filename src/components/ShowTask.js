import React, { Component } from 'react'
import {connect} from 'react-redux';


class ShowTask extends Component {


    taskList = () => {

            if (this.props.taskList===[]){
                return (
                    <div></div>
                )
            } else{

            return this.props.taskList.map((eachTask, i) => {


                return (
                
                    <div className="item" key = {i+1}>{`${i+1}) ${eachTask}`}</div>
                    
                )
            });
        };
    };

    render() {
        return (
            <div className="ui list">
                {this.taskList()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        taskList: state.taskList
    }
}

export default connect(mapStateToProps)(ShowTask);