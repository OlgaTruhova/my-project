import { listOfMastersActions } from "./constants";

const INITIAL_STATE = {
    currentListOfMasters: null
};

const listOfMastersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case listOfMastersActions.SET_CURRENT_LIST_OF_MASTERS:
        return {
            ...state,
            currentListOfMasters: action.payload
        }
        default:
            return state;
    }
};

export default listOfMastersReducer;