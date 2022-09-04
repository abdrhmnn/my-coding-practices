import React from 'react'
import { useState } from 'react'

export const StateTutorial = () => {

    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState('')

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button> <br />
            <input type="text" name="text" id="text" onChange={(e) => setInput(e.target.value)}/>
            <p>hasil : {input}</p>
            <p>{input.length > 10 ? 'penuh' : ''}</p>
        </div>
    )
}