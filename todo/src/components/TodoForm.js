import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FormDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 50px auto;
width: 400px;
background-color: white;
`;

const Input =styled.input`
width: 400px;
height: 40px;
background-color: white;
text-align: center;
border-radius: 5px;
border: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
padding-left: 30px;
`;

const Button = styled.button`
margin: 10px;
text-align: center;
height: 30px;
width: 30px;
font-size: 25px;
border: none;
:hover {
  background-color: orange;
}
`;

class TodoForm extends React.Component {
    state = {
        value:'',
        completed: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
        
            <FormDiv>
                <Input
                    type='text'
                    name='value'
                    placeholder='add new to-do '
                    onChange={this.handleChange} />

                <Button
                    onClick={() => {
                        this.props.addTodo(this.state)
                    }}> +
                    </Button>
                    
            </FormDiv>
           
        )
    }
}

export default connect(null, {addTodo})(TodoForm);