import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placeDataReducer from './reducers/PlaceDataReducer'
import placeReducer from './reducers/PlaceReducer'
import themeReducer from './reducers/theme'
import fdataReducer from './reducers/fdataReducer'
const rootreducer = combineReducers({
    place: placeReducer,
    placedata: placeDataReducer,
    theme: themeReducer,
    fdata: fdataReducer
});
const store = createStore(rootreducer,applyMiddleware(thunk))
export default store;