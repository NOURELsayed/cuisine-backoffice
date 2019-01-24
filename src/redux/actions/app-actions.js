import { HEADER_FLAG ,MENU_FLAG, HANDLE_DISPLAY } from "./types";

export const headerFlagHandle = (name) => {
    return function (dispatch) {
        dispatch({
            type: HEADER_FLAG,
            payload: name,
        })
    }
}

export const menuFlagHandle = (name) => {
    return function (dispatch) {
        dispatch({
            type: MENU_FLAG,
            payload: name,
        })
    }
}

export const handleDisplay = (nav, list, form) => {
    return function (dispatch) {
        dispatch({
            type: HANDLE_DISPLAY,
            nav: nav,
            list: list,
            form: form
        })
    }
}


