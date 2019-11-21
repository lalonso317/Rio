import React from 'react'
import { useAuth } from "../hooks"
import Icon from '../lib/Icon'

export default function Dashboard(props){

const { username, signout } = useAuth()

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
                <Icon icon="plus-circle"></Icon>
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
    </div>
    )
}