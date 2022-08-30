const initialState={
    name : 'tasks',
    tasks: [
        {
            id: '11',
            title: 'tarea 1',
            description:' descripcion de la tarea 1',
            completed: false
        },{
            
            id: '12',
            title: 'tarea 2',
            description:' descripcion de la tarea 2',
            completed: false
        }
    ]
};

export default function rootReducer(state=initialState, action){
    switch (action.type) {
        case "ADD": 
        return{
            ...state,
            id: state.tasks.length +1,
            tasks: state.tasks.concat(action.payload)
        }   
        case "REMOVE": 
        return{
            ...state,
            tasks : state.tasks.filter(task => task.id !==  action.id)
        }    
        default: return state
    }
}