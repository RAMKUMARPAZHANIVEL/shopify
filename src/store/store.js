import {combineReducers} from 'redux'
import { createStore,applyMiddleware } from 'redux'


import cartReducer from './reducers/cartReducer'


const store = createStore(combineReducers({
  cart : cartReducer,

}))
 



export default store;