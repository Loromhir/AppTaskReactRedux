import React from 'react';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TaskForm from './components/TaskForm';
import  TaskList  from './components/TaskList';
import { Route } from "react-router-dom";
import NavBar from './components/Nav';

function App() {


  return (
    <React.Fragment>
        <Route  component={NavBar}/> 
        <Route exact path='/create' component={TaskForm}/> 
        <Route exact path='/' component={TaskList}/> 
       
    </React.Fragment>

  );
}

export default App;
