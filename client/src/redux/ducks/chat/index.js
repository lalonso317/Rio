import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import socket from '../../../lib/Socket'

const ADD_MESSAGE = "chat/ADD_MESSAGE"
const GET_USERS = "chat/GET_USERS"

const initialState = {
    messages: [],
    users: []
}

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload]}
        case GET_USERS:
            return { ...state, users: action.payload }
        default: 
            return state
    }
}
function getUsers(users){
    return {
            type: GET_USERS,
            payload: users
    }
}

function addMessages(message){
    return{
    type: ADD_MESSAGE,
    payload: message
    }
}

export function useChat(){
    const dispatch = useDispatch()
    const messages = useSelector(appState => appState.chatState.messages)
    const add = message => socket.emit("this is a message", message)
    const users = useSelector(appState => appState.chatState.users)

    useEffect(() =>{
        socket.on("message", message =>{
            dispatch(addMessages(message))
        })
        socket.on("users", users =>{
            dispatch(getUsers(users))
        })
    }, [dispatch])

    return { messages, add, users }
}
