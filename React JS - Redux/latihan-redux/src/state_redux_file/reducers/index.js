// kombinasikan reducers

import { combineReducers } from "redux";
import AccountReducer from './accountReducer'

// berupa funtion yg parameter (objek) nya berupa reducer yg ingin kita kombinasikan

const reducers = combineReducers({
    account: AccountReducer
})

export default reducers