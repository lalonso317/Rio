import React from  'react'
import { useAuth } from '../hooks'

export default function About(props){
const { username } = useAuth()
    return(
        <div>
            <h1>This is all about you, {username}</h1>
        </div>
    )
}