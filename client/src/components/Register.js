import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { usePosty } from "../redux/ducks/register"

export default function Register(props){
const [username, SetUsername] = useState('')
const [password, SetPassword] = useState('')
const { create } = usePosty()

function handleSubmit(e){
    e.preventDefault()

    create(username, password).then(() =>{
        console.log("hello")
        props.history.push("/login")
    }).catch(e => {
        console.log("LOGIN ERROR - BAD PASSWORD")
    })
    console.log(username, password)
    SetUsername('')
    SetPassword('')
}
    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={e => SetUsername(e.target.value)}></input>
            <input type="text" placeholder="password" value={password} onChange={e => SetPassword(e.target.value)}></input>
            <button type="submit"> Submit</button>
            </form>
        </div>
    )
}