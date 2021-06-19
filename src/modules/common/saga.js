
import {put,call,takeEvery,delay} from 'redux-saga/effects';
import * as Actions from './constants';
import NavigationService, { authStack, rootSwitch } from '../../config/navigator';


function* Stoploading(){
    console.log('came to stop loading')
    try{
    yield put({
        type: Actions.STOP_IS_LOADING
    })
    //  yield call(NavigationService.navigate(authStack.login))
 console.log('navigate to login')
} catch(e){
    console.log('error while loading login page')
}
}

function* startloading(){
    try{
    yield put({
        type:Actions.START_LOADING_SET
    })}
    catch(e){
        console.log('loading screen error')
    }
}

function* stopIsgettingstart(){
    console.log('came to stop isgettingstart saga')

    try{
        yield put({
            type: Actions.STOP_ISGETTINGSTARTED
        })

        //  yield call(NavigationService.navigate(authStack.login))
    } catch{
        console.log('this is stop_isgetting saga')
    }
 
}

 function* skiponboard(){
     
    yield put({
        type: Actions.SKIP_ONBOARD_SUCCESS
    })
 }

 function* backtoonboardSaga(){
     console.log('came to backtoonboardSaga ')
    yield put({
        type: Actions.BACK_TO_ONBOARD_SUCSESS
    })
}

function* gettingstartcomplteSaga(){
    yield put({
         type:Actions.GETTINGSTART_COMPLTE_COMPLTE
    })
}

export default function* CommonSaga() {
   yield takeEvery(Actions.START_LOADING,startloading)
    yield takeEvery(Actions.IS_LOADING_FALSE,Stoploading)
    yield takeEvery(Actions.IS_GETTING_START_ENDED,stopIsgettingstart) 
    yield takeEvery(Actions.SKIP_ONBOARD_START,skiponboard)
    yield takeEvery(Actions.BACK_TO_ONBOARD_START,backtoonboardSaga)
    yield takeEvery(Actions.GETTINGSTART_COMPLTE_START,gettingstartcomplteSaga)
}
