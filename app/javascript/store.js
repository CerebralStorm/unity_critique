import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { reduxTokenAuthReducer } from 'redux-token-auth'

const middleware = [thunk];

let reducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer
})

const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        firstName: null
      },
    },
  }
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleware(reducer, initialState)
