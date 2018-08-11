import { combineReducers } from 'redux'
import gameReducer from './gameReducer'

// import employeeFormReducer from './employeeFormReducer'

export default combineReducers({
    game: gameReducer
})