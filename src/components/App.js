

import React, { Component } from 'react'
import AddTask from './AddTask'
import ShowTask from './ShowTask';





export default class App extends Component {

 

   

    render() {
       
        return (
            <div>
                <AddTask />

                <ShowTask />
            </div>
        )
    }
};
