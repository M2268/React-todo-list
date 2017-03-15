import React, { Component } from 'react';

class TaskItem extends Component {

    deleteTask(id){
        this.props.onDelete(id);

        console.log("test");
    }
    render() {

         return (
            <li className="App">
                <strong>{this.props.task.title}</strong> - {this.props.task.category} <a href="#" onClick={this.deleteTask.bind(this, this.props.task.id)}>X</a>
            </li>
        );
    }
}

TaskItem.propTypes = {
    task: React.PropTypes.object,
    onDelete: React.PropTypes.func
};

export default TaskItem;
