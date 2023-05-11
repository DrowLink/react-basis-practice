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

// this ll be executed as a loop because it called itself, in tec words update way
// const UseEffect = () => {

// const [name, setName] = useState("Maria")
// const [counter, setCounter] = useState(0)

//  useEffect(() => {
//          setCounter(counter+1);
//  })

// return (<>
//     <p>Hi ppl</p>
//     <h1>{counter}</h1>
//     <button href="#" onClick={() => setCounter(counter+ 1)} className="btn btn-success">Push</button>
// </>)
//}





//the unMounted has a "return" on it, this hook way is appliable for example in cases when you need to restart some variables, some user data, etc etc etc
// Also the return section has an arrow function inside developing our context
// const UseEffect = () => {

// const [name, setName] = useState("Maria")
// const [counter, setCounter] = useState(0)

//  useEffect(() => {
//          setCounter(counter+1);

//  },[])

// return (<>
//     <p>Hi ppl</p>
//     <h1>{counter}</h1>
//     <button href="#" onClick={() => setCounter(counter+ 1)} className="btn btn-success">Push</button>
// </>)
//}


export default UseEffect;
