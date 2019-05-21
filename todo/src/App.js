import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';

const AppDiv = styled.div`
max-width: 700px;
width: 100%;
height: 1000px;
margin: 0 auto;
font-family: 'Old Standard TT', serif;
background-color:#beeef7;
`;

const HeaderDiv = styled.div`
height: 30px;
margin: 0;
display: flex;
justify-content: center;
align-items:center;
padding: 30px;
color: white;
background-color: #6fc2d0;

`;

const HeaderH1=styled.h1`
display: flex;
justify-content: center;
align-content:center;
margin: 0;
font-size: 45px;
`;

function App() {
  return (
    <AppDiv>
      <HeaderDiv>
        <HeaderH1>CheckList</HeaderH1>
      </HeaderDiv>
      <TodoForm />
      <TodoList />
    </AppDiv>
  );
}

export default App;
