import React, { useRef } from "react";

const RefTutorial = () => {

    // useRef digunakan untuk memanipulasi DOM elements (virtual DOM)
    const inputRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault()
        console.log(inputRef)
        inputRef.current.focus()
    }

    return(
        <div>
            <h3>Hello</h3>
            {/* tambahkan props ref ke pada elemen DOM yang ingin dimanipulasi */}
            <input type="text" placeholder="input some text.." ref={inputRef} />
            <button onClick={handleClick}>change name</button>
        </div>
    )
}

export default RefTutorial