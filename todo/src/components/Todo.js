import React from 'react';
import { addComplete } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';


const TodoDiv=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 400px;
height: 70px;
line-height: 15px;
background-color: white;

`;


const Todo = props => {
    return (
        <TodoDiv>
            <p onClick={() => { props.addComplete(props.id) }}>
                {props.value}
            </p>
            <p>
                Completed: {props.completed.toString()}
            </p>
            <button>Delete</button>
        </TodoDiv>
    )
}

export default connect(null, { addComplete})(Todo);