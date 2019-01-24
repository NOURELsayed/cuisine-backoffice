import {CHILED_ACTION1} from './../actions/types'

const intialState = {
    
    chiledData: [],
}



export default (state=intialState , action) => {


    switch(action.type){

        case CHILED_ACTION1:
        return {...state, chiledData: [...state.chiledData,action.payload]}
        default: return state;
    }


  
}