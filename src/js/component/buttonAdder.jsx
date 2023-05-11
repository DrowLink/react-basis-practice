import React, { useState, useEffect } from "react"


 const ButtonAdder = () => {

    const [counter, setCounter] = useState(0)
    const othercounter = 0;

    return (<>
            <p>Toda mi gente se mueve</p>
            <h1>{counter}</h1>
            <button href="#" onClick={() => setCounter(counter+ 1)} className="btn btn-success">Push</button>
        </>)
}


export default ButtonAdder;