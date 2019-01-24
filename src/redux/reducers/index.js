import { combineReducers } from 'redux'
import List from './list-reducers'
import Selectors from './selector-reducer'
import App from './app-reducer'


export default combineReducers({

    List,
    Selectors,
    App

})
