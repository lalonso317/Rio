import React, { useState } from 'react'
import { useAuth, useChan, useChat } from "../hooks"
import Icon from '../lib/Icon'
import { Link } from 'react-router-dom'

export default function Dashboard(props){
const { username, signout} = useAuth()
const { chann } = useChan()
const [message, setMessage] = useState('')
const { messages, add } = useChat()

function handleSubmit(e){
    e.preventDefault()
    add({message, username})
    setMessage('')
}

    return(
    <div>
         <div className="log">
            <button className="logout" onClick={e => signout()}>Logout</button>
        </div>
        <div className="wel">
            <h1 className="welcome" >Welcome {username}</h1>
        </div>
        <aside>
            <div>
                <p>Main Channel</p>
                <p>{username}</p>
            </div>
            <div>
                <input type="text" placeholder="Jump to..."></input>
                <Icon icon="caret-square-left"></Icon>
                <Icon icon="caret-square-right"></Icon>
            </div>
            <div>
                <p>Channels</p>
                <Link to={'/Channels'}><Icon icon="plus-circle"></Icon></Link>
                <div>
                    {chann.map((item, i) =>(
                        <div key={"channel" + i}>
                            <p>{item.channel}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Icon icon="plus"></Icon>
                <p>Add a channel</p>
            </div>

            <div>
                <div>
                <p>Direct Messages</p>
                <Icon icon="plus-circle" ></Icon>
                </div>
            </div>
        </aside>
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="say something..."
                value={message}
                onChange={e => setMessage(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>

            <div>
                {messages.map((msg, i) =>(
                    <p key={i}>{msg.username}:{msg.message}</p>
                ))} 
            </div>
        </div>
    </div>
    )
}