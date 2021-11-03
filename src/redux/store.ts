import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import {rootReducer} from "./appReducers";

function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}
export const store = configureStore();