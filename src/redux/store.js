import { createStore, combineReducers, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/root.reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    rootReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;