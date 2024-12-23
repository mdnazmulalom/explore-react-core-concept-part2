import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState ([]); //to load data from api

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setUsers(data))
    }, []);


    return (
        <div>

            <h1>Users : {users.length}</h1>

        </div>
    )
}

// 1. Declare a state to hold the data
// 2. useEffect with call back 
// 3. Use fetch to load data in client

