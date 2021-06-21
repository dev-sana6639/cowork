import {call,put,takeEvery,select} from 'redux-saga/effects';
import * as Actions from './constants';
import {LoginService,signInWithPhoneNumber} from './services'
import NavigationService from '../../utils/navigation'
import {rootSwitch,mainstack} from '../../config/navigator'
import RootStack from '../../navigation/root-Switch'


function* SignInSaga(credential) {
    

  const userdet = credential.payload.user
  console.log('came to saga')

yield put({
    type: Actions.SIGN_IN_SUCCESS,
    payload: userdet
})

// yield call(NavigationService.navigate(rootSwitch.main))
  
}
function* signoutSaga(){
    
    yield put({
        type: Actions.SIGN_OUT_SUCCESS
    })

    // yield call(NavigationService.navigate(rootSwitch.main))
}

function* changeErrorSaga(){
    yield put({
        type: Actions.INVALID_EMAIL_AND_PASSWORD_SUCCESS
    })
}

function* signupSaga(props){
    console.log('came to register Saga')
    yield put({
        type:Actions.SIGNUP_COMPLETED,
        payload: props
    })
}

function* setanonymousSaga(){
    yield put({
        type: Actions.SETANONYMOUS_COMPLETE
    })
}
function* setAnonymousfalseSaga(){
    yield put({
        type: Actions.SETANONYMOUSFALSE_COMPLETE
    })
}
export default function* authSaga() {
    console.log('came to authsaga')
    
  yield takeEvery(Actions.SIGN_IN,SignInSaga)
  yield takeEvery(Actions.INVALID_EMAIL_AND_PASSWORD,changeErrorSaga)
  yield takeEvery(Actions.SIGN_OUT,signoutSaga)
  yield takeEvery(Actions.SIGNUP_START,signupSaga)
  yield takeEvery(Actions.SETANONYMOUS_START,setanonymousSaga)
  yield takeEvery(Actions.SETANONYMOUSFALSE_START,setAnonymousfalseSaga)
}