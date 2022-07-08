import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import dataReducer from "./data-reducer";

let reducers = combineReducers({
    scoreTableData: dataReducer,
});

let store = createStore(reducers, composeWithDevTools (applyMiddleware(thunk)));

export default store;
