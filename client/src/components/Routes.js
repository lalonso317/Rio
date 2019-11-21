import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
 
export default function Routes(props){

    return(
        <div>
            <Switch>
                <Route path="/" component={Dashboard} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
}