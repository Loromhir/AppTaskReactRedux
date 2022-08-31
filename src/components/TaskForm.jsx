import React, { useState } from 'react'
import { connect, useDispatch} from 'react-redux'
import {add} from '../redux/actions/actions'
const TaskForm = ({add}) => {

    const [newTask, setNewTask] = useState({
        id: 0,
        title: '',
        description: '', 
        completed: false
    })
    
   // const dispatch= useDispatch()

const handleChange= (e)=>{
        setNewTask(
           { ...newTask,
            [e.target.name]: e.target.value,
             id: newTask.id + 1}
        )
}


const handleSubmit = (e)=>{
   e.preventDefault();
   //add(task)
  //  dispatch(add(task))
  
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Titulo' onChange={handleChange}/>
        <textarea name="description" placeholder='Descripcion' onChange={handleChange}></textarea>
        <button onClick={()=>add(newTask)}>Guardar</button>
    </form>
  )
}

function mapDispatchToProps(dispatch){
  return {
    add: task=> dispatch(add(task))
  }
}

export default connect(null, mapDispatchToProps)(TaskForm)