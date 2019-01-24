import { SET_TABLE_LIST, ADD_NEW_RECORD, SET_RECORD_EDITEABLE, SET_CATEGORY, APPLY_EDIT_RECORD, BIND_CAT_TABLE } from './../actions/types'

const intialState = {

    tableList: [],
    catList: [],
    selectedRecord: '',
    edit: false,
    activeCategory: '',
}



export default (state = intialState, action) => {


    switch (action.type) {

        case SET_TABLE_LIST:
            return { ...state, tableList: action.payload }

        case BIND_CAT_TABLE:
            return { ...state, catList: action.payload }

        case ADD_NEW_RECORD:
            return { ...state, tableList: [...state.tableList, action.payload] }

        case SET_RECORD_EDITEABLE:
            return { ...state, selectedRecord: action.payload, edit: true }

        case SET_CATEGORY:
            return { ...state, activeCategory: action.payload }

        case APPLY_EDIT_RECORD: {

            let newList = state.tableList.map(d => {
                if (d.id == action.payload.id) {
                    return action.payload
                }
                return d;
            })
            return { ...state, tableList: newList, edit: false, selectedRecord: '' }

        }

        default: return state;
    }

}