import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
 
export default function Routes(props){

    return(
        <div>
            <Route path="/" component={Dashboard} />
            <Route path="/about" component={About} />
        </div>
    )
}