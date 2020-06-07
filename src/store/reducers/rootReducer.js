import authReducer from './authReducer'
import postReducers from './postReducers'
import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore'

//  const initState= []
//  const rootReducer = (state = [] , action) =>{
//    return state
//  }

const rootReducer = combineReducers({
   auth: authReducer,
   post: postReducers,
   firestore : firestoreReducer
 });

export default rootReducer;