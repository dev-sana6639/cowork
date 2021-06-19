import {fromJS,List,set,Map} from 'immutable';
import moment from 'moment';
import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants';

const initialState = {
    loading: true,
    isGettingStarted: true,
   

}

export default function commonReducer(state = initialState, action) {
  switch(action.type){

    case Actions.IS_GETTING_START:{
      return {
        ...state,
        isGettingStarted: true
      }
    }

    case Actions.IS_GETTING_START_ENDED:
      return {
        ...state,
        isGettingStarted: false
      }
    
      case Actions.STOP_ISGETTINGSTARTED:
        console.log('came to stop')
        return {
          ...state,
          isGettingStarted: false,
        }

    case Actions.START_LOADING_SET:
      return{
        ...state,
        loading: true
      }
    

    case Actions.IS_GETTING_SUCCESS:
  
        return{
          ...state,
          loading: false,
          isGettingStarted: true
        }
      
    case Actions.STOP_IS_LOADING:
    console.log('came to stop loading reducer')
    return{
      ...state,
      loading: false,
      
    }

    case Actions.SKIP_ONBOARD_SUCCESS:
      
      return{
        ...state,
        isGettingStarted: false
      }

    case Actions.BACK_TO_ONBOARD_SUCSESS:
      console.log('came to backtoonboard Reducer')
      return {
        ...state,
        isGettingStarted: true
      }
    case Actions.GETTINGSTART_COMPLTE_COMPLTE:
      return{
        ...state,
        isGettingStarted: true,
      }
      
      default:
          return state;
  }
}