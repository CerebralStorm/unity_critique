import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const middleware = [thunk];

let reducer = combineReducers({

})

let initialState = {}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleware(reducer, initialState)
