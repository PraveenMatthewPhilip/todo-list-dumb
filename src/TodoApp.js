import React, { useReducer } from "react";

function appReducer(state, action){
    switch(action.type){
        case 'add': {
            return [
                ...state, {
                    id: Date.now(),
                    text: '',
                    completed: false
                }
            ]
        }
    }
}

export default function TodosApp(){
    const [state, dispatch] = useReducer(appReducer, []);

    return(
        <div>
            <h1>Todos App</h1>
            <button onClick={() => dispatch({type: 'add'})}>New Todo</button>
            {
                state.map(item => (
                <div key={item.id}>{item.id}</div>
                ))
            }
        </div>
    )
}