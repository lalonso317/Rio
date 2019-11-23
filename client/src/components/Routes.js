import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
import Channels from "./Channels"

 
export default function Routes(props){

    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Dashboard} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/Channels" component={Channels} />
            </Router>
        </div>
    )
}