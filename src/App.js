import React from 'react';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TaskForm from './components/TaskForm';
import { TaskList } from './components/TaskList';
function App() {


  return (
  <>
  <h1>Hello</h1>
  <TaskForm/>
  <TaskList/>
  </>
      
  );
}

export default App;
