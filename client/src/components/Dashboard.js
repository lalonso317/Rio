import React from 'react'
import { useAuth } from "../hooks"

export default function Dashboard(props){

const { username } = useAuth()

    return(
    <h1>Hello {username}</h1>
    )
}