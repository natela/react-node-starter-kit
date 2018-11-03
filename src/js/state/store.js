import {createStore} from 'redux';
import appState from "./reducers/app-state";

export let store = createStore(appState);
