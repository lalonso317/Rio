import { useDispatch } from "react-redux"
import axios from "axios"


const CREATE_USER = 'reg/CREATE_USER'

const initalState = {
    user:[]
}
export default (state = initalState, action) =>{
    switch(action.type){
    case CREATE_USER:
        return { ...state, user: action.payload }
    default: 
        return state
    }
}

function postUser(username, password, dispatch){
    return new Promise((resolve, reject) =>{
        axios.post('/register', {username, password}).then(resp =>{
            dispatch({
                type: CREATE_USER,
                payload: resp.data
            })
            resolve()
        }).catch(e =>{
            reject()
        })  
    })
}

export function usePosty(){
    const dispatch = useDispatch()
    const create = (username, password) =>{
     return postUser(username, password, dispatch)
    }
    return { create}
}
