import React, { useState } from 'react'
import { useChan } from "../hooks"

export default function Channels(){
const [ channel, setChannel ] = useState('')
const [ description, setDescription ] = useState('')

const { create } = useChan()

function handleSubmit(e){
    e.preventDefault()
    create(channel, description)

    setChannel('')
    setDescription('')
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="channel" type="text" value={channel} onChange={e => setChannel(e.target.value)}></input>
                <input placeholder="description" type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )   
}