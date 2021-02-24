import { combineReducers } from "redux"

const loaderReducer = (state = true, action) => {
   switch (action.type) {
      case "TURN_ON_LOADER":
         return true
      case "TURN_OFF_LOADER":
         return false
      default:
         return state
   }
}

const allReducers = combineReducers({
   loader: loaderReducer,
})

export default allReducers
