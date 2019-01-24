import { HEADER_FLAG, MENU_FLAG, HANDLE_DISPLAY } from './../actions/types'

const intialState = {
    headerFlag: 'MasterData',
    menuFlag: '',
    navMenuDisplay: "",
    listDisplay: "",
    formDisplay: ""
}

export default (state = intialState, action) => {
    switch (action.type) {
        case HEADER_FLAG:
            return { ...state, headerFlag: action.payload }
        case MENU_FLAG:
            return { ...state, menuFlag: action.payload }
        case HANDLE_DISPLAY:
            return { ...state, navMenuDisplay: action.nav, listDisplay: action.list, formDisplay: action.form}
        default: return state;
    }
}

