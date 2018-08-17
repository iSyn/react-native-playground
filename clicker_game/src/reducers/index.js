import { combineReducers } from 'redux'
import headerReducer from './HeaderReducer'

export default combineReducers({
    header: headerReducer
})