import {all} from 'redux-saga/effects';
import authSaga from './modules/auth/saga';
import CommonSaga from './modules/common/saga';

export default function* rootSagas(){
    console.log('checksagas')
    yield all([
        authSaga(),
        CommonSaga(),
    ])
}