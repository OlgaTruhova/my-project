import { listOfMastersActions } from "./constants";

export const setCurrentListOfMasters = (masters) => ({type: listOfMastersActions.SET_CURRENT_LIST_OF_MASTERS, payload: masters});