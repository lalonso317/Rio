import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const LOGIN_PENDING = "auth/LOGIN_PENDING"
const LOGIN_SUCCESS ="auth/LOGIN_SUCCESS"
const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
const LOGOUT = "auth/LOGIN"

const initalState = {
username: '',
isAuthenticated: false,
loading: false


}

export default (state = initalState, action) =>{
    switch(action.type){
    case LOGIN_PENDING:
        return { ...state, loading: true}
    case LOGIN_SUCCESS:
        return {...state, isAuthenticated: true,  loading:false, username: action.payload}
    case LOGIN_FAILURE:
        return{ ...state, isAuthenticated: false, loading: false,  username: ''}
    case LOGOUT:
        return initalState
    default: 
        return state
    }
}

function login(username, password, dispatch){

    return new Promise((resolve, reject)=>{
        axios.post("/login", {username, password}).then(resp =>{
        axios.defaults.headers.common = { Authorization: `Bearer ${resp.data.token}`}
        dispatch({
            type: LOGIN_SUCCESS,
            payload: username
        })
        resolve()

        }).catch(e =>{
          dispatch({
              type: LOGIN_FAILURE  
            })
            console.log('foobar')
            reject()
        })
     })
}

    
function logout(){
    axios.defaults.headers.common = {Authorization:''}
    return {type:LOGOUT}
}

export function useAuth(){
    const username = useSelector(appState => appState.authState.username)
    const isAuthenticated = useSelector(appState => appState.authState.isAuthenticated)
    
    const dispatch = useDispatch()
    const signin = (username, password) =>{
    dispatch({type: LOGIN_PENDING})
    return login(username, password, dispatch)
    }
    
    const signout = () => dispatch(logout())
    
    return { signin, signout, isAuthenticated, username }
}