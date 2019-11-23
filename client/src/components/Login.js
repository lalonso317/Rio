import React, { useState } from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'


export default function Login(props){
const [ username, setUsername ] = useState('')
const [ password, setPassword ] = useState('')

const { signin } = useAuth()

function handleSubmit(e){
    e.preventDefault()

    signin(username, password).then(() =>{
        props.history.push("/")
    }).catch(e => {
        console.log("LOGIN ERROR - BAD PASSWORD")
    })
    setUsername('')
    setPassword('')
}

    return(
        <div >
            <div className="formpage">
                <div className="formback">
                    <div className="login">
                        <p >An app like Slack</p>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <input className="user" placeholder="username" type="text" name="username" required value={username} onChange={e => setUsername(e.target.value)}></input>
                        <input className="pass" placeholder="password" type="text" name="password" required value={password} onChange={e => setPassword(e.target.value)} ></input>
                        <button className="sub" type="submit">Login</button>
                    </form>
                    <div className="newuser">
                        <p className="areyou">Are you a new user?</p>
                    <Link to={'/Register'}> <button className="clickhere">Click here</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}