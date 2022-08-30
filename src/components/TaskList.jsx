import React from 'react'
import { useSelector } from 'react-redux'


export const TaskList = () => {

    const task = (task) => {
        console.log(task);
        return (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>{task.completed ? 'Terminado!' : 'Sin hacer!'}</p>
            </div>
        )
    }
    const tasks = useSelector(state => state.tasks)
    console.log(tasks)
    return (
        <div>
            {tasks.map(task)}
        </div>
    )
}

