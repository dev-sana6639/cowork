
import {fromJS,List,set,Map} from 'immutable';

import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants';

const initialState = fromJS({
    isLogin: false,
    isAnonymous: false,
    pending: false,
    user: {},
   
    })

export default function authReducer( state = initialState, action) {
    switch(action.type){
        case Actions.SIGN_IN:
            console.log('came to auth reducer')
            return{
                ...state,
                
            }
        
        case Actions.SIGN_IN_SUCCESS:
           console.log('came to sign in sucess reducer')
            return {
             
                isLogin: true,
                user : action.payload,
            }
        
        case Actions.SIGN_IN_ERROR:
            return{
                ...state
            }
        case Actions.SIGN_OUT:
            return {
                ...state,
            }
        case Actions.SIGN_OUT_SUCCESS:
          
            return{
            ...state,
                isLogin: false,
                user: [],
                

            }
        
        case Actions.INVALID_EMAIL_AND_PASSWORD:
            
            return {
                invalidemailandpasswordError: 'Invalid'
            }
        
        case Actions.INVALID_EMAIL_AND_PASSWORD_SUCCESS:
           
            return {
                invalidemailandpasswordError: undefined
            }
        case Actions.SIGNUP_COMPLETED:
            console.log('successfull reducer and payload is',action.payload)
            return {
                ...state,
                isLogin: true,
                user: action.payload.payload
            }
        
        case Actions.SETANONYMOUS_COMPLETE:
            return{
                ...state,
                isLogin: false,
                isAnonymous: true

            }
        
       case Actions.SETANONYMOUSFALSE_COMPLETE:
           return {
               ...state,
               isAnonymous: false
           }
      

        default:
            return state;
    }
} 