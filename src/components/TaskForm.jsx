import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {add} from '../redux/actions/actions'
import { useParams } from 'react-router-dom'
const TaskForm = ({add}, task) => {

    const [newTask, setNewTask] = useState({
        id: 0,
        title: '',
        description: '', 
        completed: false
    })
const params= useParams()


const handleChange= (e)=>{
        setNewTask(
           { ...newTask,
            [e.target.name]: e.target.value,
             id: newTask.id + 1}
        )
}

const handleSubmit = (e)=>{
   e.preventDefault();  
}

useEffect((tasks)=>{
  if(params.id){
    setNewTask(tasks.find(task=> task.id === params.id))
  }else{
    
  }
},[])

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Titulo' value={task.title} onChange={handleChange}/>
        <textarea name="description" placeholder='Descripcion' value={task.description} onChange={handleChange}></textarea>
        <button onClick={()=>add(newTask)}>Guardar</button>
    </form>
  )
}
function mapStateToProps(state){
  return{
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch){
  return {
    add: task=> dispatch(add(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)