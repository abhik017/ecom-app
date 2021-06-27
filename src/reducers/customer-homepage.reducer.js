import {
    GET_ITEMS,
    GET_ITEMS_ERROR,
    GET_ITEMS_SUCCESS
} from '../actions/customer-homepage.action';

const initialState = {
    error: "",
    itemsArray: []
}

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                itemsArray: action.payload.itemsArray
            }
        case GET_ITEMS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getItemsArray = state => state.customer.itemsArray;

export default AppReducer;