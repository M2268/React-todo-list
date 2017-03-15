import React, {Component} from 'react';

class AddTask extends Component {

    constructor() {
        super();
        this.state = {
            newTask: {}
        }
    }

    static defaultProps = {
        categories: ['cat1', 'cat2', 'cat3']
    };

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('field required!');
        } else {
            this.setState({
                    newTask: {
                        title: this.refs.title.value,
                        category: this.refs.category.value
                    }
                },
                function () {
                    // console.log(this.state.newProject);
                    this.props.addTask(this.state.newTask);
                })
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add Task</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label> title</label>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label> cat</label>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

AddTask.propTypes = {
    categories: React.PropTypes.array,
    addTask: React.PropTypes.func
};

export default AddTask;
