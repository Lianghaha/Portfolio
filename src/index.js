import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { PlayGround } from "./pages/PlayGround/PlayGround"
import { Projects } from "./pages/Projects/Projects"

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/projects" exact render={() => <Projects />} />
            <Route path="/playGround" exact render={() => <PlayGround />} />
            <Route path="/" exact render={() => <Home />} />
         </Switch>
      </Router>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))
