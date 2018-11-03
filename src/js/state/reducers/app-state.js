import {SELECT_CONTACT, UPDATE_CONTACTS} from '../actions';

let initialState = initAppState();

const appState = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CONTACT:
            return {
                ...state,
                selectedContactIndex: action.index
            }
        case UPDATE_CONTACTS:
            return {
                contacts: [
                    ...action.contacts
                ],
                selectedContactIndex: 0
            }
        default:
            return state;
    }
};

function initAppState() {
    const emptyState = {
        contacts: [],
        selectedContactIndex: 0
    };

    initialState = {
        ...emptyState
    };

    return initialState;
}

export default appState;
