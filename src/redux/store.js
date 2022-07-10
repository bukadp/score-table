import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import dataReducer from "./data-reducer";
import {loadState, saveState} from "../utils/localstorage";
const persistedStore = loadState();

let reducers = combineReducers({
    scoreTableData: dataReducer,
});

let store = createStore(reducers, persistedStore, composeWithDevTools (applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});


export default store;
