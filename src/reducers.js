import {combineReducers} from'redux';
import authReducer from './modules/auth/reducer';
import commonReducer from './modules/common/reducer';

const rootReducers = combineReducers({
    auth: authReducer,
    common: commonReducer,
})

export default rootReducers;