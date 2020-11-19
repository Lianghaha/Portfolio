import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { PlayGround } from "./pages/PlayGround/PlayGround"

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/Home" exact render={() => <Home />} />
            <Route path="/" exact render={() => <PlayGround />} />
         </Switch>
      </Router>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))
