import React, { useReducer } from "react";

// state = current value dari count atau nilai dari initial state yg sudah kita buat
const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {
                count: state.count + 1,
                input: state.input
            }
        case "ketik" :
            return {
                count: state.count,
                input: action.val
            }
        default :
        return state
    }
}

export const ReducerTutorial = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0, input: ''});

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button> <br />
            <input type="text" name="text" id="text" onChange={(e) => dispatch({ type: "ketik", val: e.target.value })}/>
            <p>hasil : {state.input}</p>
            <p>{state.input.length > 10 ? 'penuh' : ''}</p>
        </div>
    )
}