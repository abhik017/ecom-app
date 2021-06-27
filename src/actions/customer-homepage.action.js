import { getApi, postApi } from '../utils/api-caller';
import { DATA_BASE_URL } from '../utils/url-constants';
import { showErrorMessage, showSuccessMessage } from '../utils/util';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export function customerGetItems() {
    return async (dispatch) => {
        try {
            dispatch({type: GET_ITEMS});
            const response = await getApi('/v0/customer/shop', DATA_BASE_URL);
            dispatch({type: GET_ITEMS_SUCCESS, payload: response.data});
        } catch(err) {
            console.log(err);
            dispatch({type: GET_ITEMS_ERROR, payload: err});
            showErrorMessage(err.toString());
        }
    }
}