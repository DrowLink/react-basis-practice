import React, { useState, useEffect } from "react"



// On this way only be executed one time cause dependency is there but only mounted.
const UseEffect = () => {

    const [name, setName] = useState("Maria")
    const [counter, setCounter] = useState(0)

     useEffect(() => {
             setCounter(counter+1);
     },[])

    return (<>
        <p>Hi ppl</p>
        <h1>{counter}</h1>
        <button href="#" onClick={() => setCounter(counter+ 1)} className="btn btn-success">Push</button>
    </>)

}