import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { PlayGround } from "./pages/PlayGround/PlayGround"
import { Projects } from "./pages/Projects/Projects"
import { Loader } from "./pages/Loader/Loader"

function App() {
   const [loader, setLoader] = useState(true)

   return (
      <Router basename="/">
         {loader ? (
            <Loader setLoader={setLoader} />
         ) : (
            <Switch>
               <Route path="/projects" exact render={() => <Projects />} />
               <Route path="/playGround" exact render={() => <PlayGround />} />
               <Route path="/" render={() => <Home />} />
            </Switch>
         )}
      </Router>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))
