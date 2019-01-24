import { SET_TABLE_LIST, ADD_NEW_RECORD, SET_RECORD_EDITEABLE, SET_CATEGORY, APPLY_EDIT_RECORD , BIND_CAT_TABLE } from "./types";
import { getTable, postTable, patchRecord } from './../../api'

export const bindTable = (model, api, filters) => {
    return function (dispatch) {
        getTable(model, api, filters).then(res => {

            dispatch({
                type: SET_TABLE_LIST,
                payload: res,

            })

        })

    }
}


export const bindCatTable = (model, api, filters) => {
    return function (dispatch) {
        getTable(model, api, filters).then(res => {

            dispatch({
                type: BIND_CAT_TABLE,
                payload: res,

            })

        })

    }
}

export const setCategory = (id) => {
    return function (dispatch) {
        dispatch({
            type: SET_CATEGORY,
            payload: id,
        })
    }
}


export const addNewRecord = (model, api, data) => {
    return function (dispatch) {

        postTable(model, api, data)
            .then(res => {


                dispatch({
                    type: ADD_NEW_RECORD,
                    payload: res,

                })
            })

    }
}

export const editRecord = (model, api, id, data) => {
    return function (dispatch) {

        patchRecord(model, api, id, data)
            .then(res => {
                dispatch({
                    type: APPLY_EDIT_RECORD,
                    payload: res,
                })
            })

    }
}

export const setRecordToEdit = (data) => {
    return function (dispatch) {
        dispatch({
            type: SET_RECORD_EDITEABLE,
            payload: data,

        })
    }
}


