import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import axios from "axios"


const CREATE_CHANNEL = 'chans/CREATE_CHANNEL'
const GET_CHANNEL = 'chans/GET_CHANNEL'

const initalState = {
   channel: [],
   made: []
}
export default (state = initalState, action) =>{
    switch(action.type){
    case CREATE_CHANNEL:
        return { ...state, channel: action.payload}
    case GET_CHANNEL:
        return{ ...state, made: action.payload}
    default: 
        return state
    }
}

function makeChans(channel, description){
    return dispatch =>{
        axios.post('/channel', {channel, description}).then(resp =>{
            dispatch({
                type:CREATE_CHANNEL,
                payload: resp.data
            })
        })
    }
}

function getChans(){
    return dispatch =>{
        axios.get('/channel').then(resp =>{
            dispatch({
                type:GET_CHANNEL,
                payload: resp.data
            })
        })
    }
}

export function useChan(){
    const dispatch = useDispatch()
    const chann = useSelector(appState => appState.chanState.made)
    const get = channel => dispatch(getChans(channel))
    const create = (channel, description) => dispatch(makeChans(channel, description))

    useEffect(() =>{
        get()
    }, [dispatch])
    return { create, get, chann }
}
