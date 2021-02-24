import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { PlayGround } from "./pages/PlayGround/PlayGround"
import { Projects } from "./pages/Projects/Projects"
import { Loader } from "./pages/Loader/Loader"
import { createStore } from "redux"
import allReducers from "./redux/reducers"
import { Provider, useSelector } from "react-redux"

const store = createStore(
   allReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
   const loader = useSelector((state) => state.loader)
   return (
      <Router basename="/">
         {loader ? (
            <Loader />
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

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
)
