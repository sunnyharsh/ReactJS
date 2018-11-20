import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import  rootReducer ,{rootSaga}  from '../modules/index';

const sagaMiddleware=createSagaMiddleware();

var middleware =applyMiddleware(sagaMiddleware);

export default createStore( rootReducer ,{} , composeWithDevTools(
    middleware
));
sagaMiddleware.run(rootSaga);