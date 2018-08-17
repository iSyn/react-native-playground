import { combineReducers } from 'redux'
import headerReducer from './HeaderReducer'
import storeReducer from './StoreReducer'

export default combineReducers({
    header: headerReducer,
    store: storeReducer
})