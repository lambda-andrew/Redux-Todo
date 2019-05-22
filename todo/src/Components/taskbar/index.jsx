import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../actions';

class TaskBar extends React.Component {

    handleSubmit = (e) => {
        this.props.addTask(this.refs.task.value);
        this.refs.task.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" ref="task" placeholder="add your tasks here" />
                <button onClick={this.handleSubmit}>Add Task</button>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch);
}

export default connect(() => ({ }), mapDispatchToProps)(TaskBar);