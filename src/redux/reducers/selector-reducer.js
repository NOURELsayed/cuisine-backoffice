import { SELECTOR } from './../actions/types'

const intialState = {

   
}



export default (state = intialState, action) => {


    switch (action.type) {

        case SELECTOR:
            return { ...state, [action.payload.name]: action.payload.data }


        default: return state;
    }

}