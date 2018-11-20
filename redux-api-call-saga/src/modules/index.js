import { combineReducers } from 'redux';
// import { routerReducer} from 'react-router-redux';
import { fork , all} from 'redux-saga/effects'

import { ui } from './ui/reducers';
import * as uiSagas from './ui/sagas'

var rootReducers= combineReducers({
    ui
});

export function* rootSaga(){
    yield all([
        ...Object.values(uiSagas),
    ].map(fork));
};

export default rootReducers;