import React, { useState, useLayoutEffect } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { PlayGround } from "./pages/PlayGround/PlayGround"
import { Projects } from "./pages/Projects/Projects"
import { Loader } from "./pages/Loader/Loader"

function App() {
   const [loader, setLoader] = useState(true)

   useLayoutEffect(() => {
      setTimeout(() => setLoader(false), 1000)
   }, [])
   //testes
   return (
      <Router>
         {loader ? (
            <Loader />
         ) : (
            <Switch>
               <Route path="/projects" exact render={() => <Projects />} />
               <Route path="/playGround" exact render={() => <PlayGround />} />
               <Route path="/Portfolio" exact render={() => <Home />} />
            </Switch>
         )}
      </Router>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))
