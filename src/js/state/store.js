import {createStore} from 'redux';
import appState from "./reducers/app-state";

export let store = createStore(
    appState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
