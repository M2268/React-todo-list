import React, { Component } from 'react';
//import $ from 'jquery';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            tasks: []
        }
    }

    getTasks(){
        this.setState({
            tasks: [
                {
                    title: 'preinitialised task',
                    category: 'cat1'
                },
                {
                    title: 'another one',
                    category: 'cat2'
                }
            ]
        });
    };

    componentWillMount(){
        this.getTasks();
    }
/*
    componentDidMount(){
        this.getTasks();
    }
*/
    handleAddTask(task){
        let tasks = this.state.tasks;
        tasks.push(task);
        this.setState({tasks:tasks});
    }
    handleDeleteTask(id){
        let tasks = this.state.tasks;
        let index = tasks.findIndex(x => x.id === id);
        tasks.splice(index, 1);
        this.setState({tasks:tasks});

    }

  render() {
    return (
      <div className="App">
        <AddTask addTask={this.handleAddTask.bind(this)} />

          <Tasks tasks={this.state.tasks} onDelete={this.handleDeleteTask.bind(this)}/>

      </div>
    );
  }
}

export default App;
