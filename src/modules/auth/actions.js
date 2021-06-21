import * as Actions from './constants';

export function signin(props){
       
    return{
        type: Actions.SIGN_IN,
        payload: props
    }
}

export function signup(props){
    return{
        type:Actions.SIGNUP_START,
        payload: props
    }
}

export function logout () {
   
    return {
        type: Actions.SIGN_OUT
    }
}

export function changeinvalidError() {
    
    return{
        type: Actions.INVALID_EMAIL_AND_PASSWORD
    }
}

export function setAnonymous() {
    return{
        type: Actions.SETANONYMOUS_START
    }
}

export function setAnonymousfalse(){
    return{
        type: Actions.SETANONYMOUSFALSE_START
    }
}
