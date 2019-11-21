import React, { useState } from 'react'
import { useAuth } from '../hooks'


export default function Login(props){
const [ username, setUsername ] = useState('')
const [ password, setPassword ] = useState('')

const { signin } = useAuth()

function handleSubmit(e){
    e.preventDefault()

    signin(username, password).then(resp =>{
        props.history.push("/")
    })
    console.log(username, password)
}

    return(
        <div >
            <div className="formpage">
                <div className="login">
                    <p >Login</p>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="user" placeholder="username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                    <input className="pass" placeholder="password" type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} ></input>
                    <button className="sub" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}