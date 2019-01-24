import { CHILED_ACTION1 , SET_CATEGORY } from "./types";

export const chiledAction = (id, data, dispatch) => {
    return function (dispatch) {

        dispatch({
            type: CHILED_ACTION1,
            payload: data,
            index: id,
        })

    }
}