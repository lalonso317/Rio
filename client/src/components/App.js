import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Checklogin from "./Checklogin"
import Login from "./Login"
import Register from "./Register"


import "../styles/form.css"
import "../styles/dashboard.css"
import "../styles/register.css"

function App(props) {

  return (
    <div>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="*" component={Checklogin} />
          </Switch>
        </Router>
    </div>
  )
}

export default App
