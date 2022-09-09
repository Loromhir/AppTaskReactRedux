import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/actions/actions';

 const TaskList = () => {

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch()
    const handleDelete= (id)=>{
        dispatch(remove(id))
    }
    const task = (task) => {
        return (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>{task.completed ? 'Terminado!' : 'Sin hacer!'}</p>
                <button onClick={()=>{handleDelete(task.id)}}>Borrar</button>
                <Link to={`edit/${task.id}`}>Editar</Link>
            </div>
        )
    }
    return (
        <div>
            {tasks.length < 1 ? <h2>No hay tareas para realizar</h2> : tasks.map(task)}
        </div>
    )
}

export default TaskList