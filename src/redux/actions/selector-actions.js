import { SELECTOR } from "./types";
import { getTable } from './../../api'


export const selector = (model, api, filters) => {
    return function (dispatch) {
        getTable(model, api, filters).then(res => {
            dispatch({
                type: SELECTOR,
                payload: { name: api, data: res },
            })
        })
    }
}

