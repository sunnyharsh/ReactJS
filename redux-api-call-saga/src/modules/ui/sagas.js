// import { takeEvery , call , put} from 'redux-saga/effects';
import { takeEvery  , put} from 'redux-saga/effects';
import{

} from './api';
import{
    REQUEST_ADD_ITEM,
    receiveAddItem
} from './actions';

function* callRequestAddItem(action){
    alert(action.payload);
    //Api if Needed
    yield put(receiveAddItem(action.payload));
}
export function* requestAddItemSaga(){
    yield takeEvery( REQUEST_ADD_ITEM , callRequestAddItem)
}