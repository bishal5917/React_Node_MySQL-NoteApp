import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import userReducer from './UserRedux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    user: userReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
)