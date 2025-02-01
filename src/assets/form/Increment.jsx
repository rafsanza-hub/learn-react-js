import { useState } from "react"

export default function Increment() {
    var [count, setcount] = useState(0)
    function handleClick(e) {
        setcount(count + 1)
    }
    
    return(
        <div>
            <h3>Angka {count}</h3>
            <button onClick={handleClick}>+</button>
        </div>
    )
}