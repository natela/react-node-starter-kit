import {CONTACT_DETAILS} from '../actions';

let initialState = initAppState();

const appState = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CONTACT_DETAILS:
            newState = {
                ...state,
                details: action.details
            };
            break;
        default:
            newState = state;
    }
    return newState;
};

function initAppState() {
    const emptyState = {
        details: {}
    };

    initialState = {
        ...emptyState
    };

    return initialState;
}

export default appState;
