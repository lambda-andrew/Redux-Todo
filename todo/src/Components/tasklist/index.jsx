import React from 'react';
import {connect} from 'react-redux';

class TaskList extends React.Component {
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, index)=><Task key={index} task={task} />)}
                </tbody>
            </table>
        )
    }
}

function mapStatetoProps(state){
    return {
        tasks:state.tasks
    }
}

export default connect(mapStatetoProps)(TaskList);