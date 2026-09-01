import React, { useEffect, useState } from 'react'

function FunctionalComp() {
    const [count, setcount] = useState(100);
    const [user, setuser] = useState({
        name: "fed",
        age: 66
    })

    const [x, setx] = useState(0);
    const [y, sety] = useState(0);

    useEffect(
        () => {
            window.addEventListener("mousemove", (e) => {
                setx(e.clientX);
                sety(e.clientY);
            })
            document.title = "comp";
        }
    );

    return (

        <div>

            <h1> X : {x}</h1>
            <h1> Y : {y}</h1>

            <h2>counter : {count}</h2>
            <h2>your name is : {user.name} and age : {user.age}</h2>

            <button onClick={() => setcount(count + 2)}>Add Counter</button>
            <button onClick={() => setuser({ name: user.name, age: user.age + 1 })}>Add Age</button>

        </div>
    )
}

export default FunctionalComp
