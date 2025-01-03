import { useState } from "react"

export default function Counter(){
    const [count, setcount] = useState(0);

    const handleAdd = () => {
       const newCount = count + 1;
        setcount (newCount);
    }

    const handleReduce = () => {
        const newCount = count -1;
        setcount (newCount)
    }

    return (
        <div style ={{ border: '2px solid red', margin: '5px', paddingBottom: '20px' }}>
            <h3> Counter: {count} </h3>
            <button onClick={handleAdd}> Add +</button>
            <button onClick={handleReduce}> Minus -</button>

        </div>
    )
}