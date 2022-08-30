import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../redux/actions/actions'
const TaskForm = () => {

    const [task, setTask] = useState({
        id: 0,
        title: '',
        description: '', 
        completed: false
    })

    const dispatch= useDispatch()

const handleChange= (e)=>{
        setTask(
           { ...task,
            [e.target.name]: e.target.value}
        )
}

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e, task)
    dispatch(add(task))
    task.id = task.id + 1
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Titulo' onChange={handleChange}/>
        <textarea name="description" placeholder='Descripcion' onChange={handleChange}></textarea>
        <button>Guardar</button>
    </form>
  )
}

export default TaskForm