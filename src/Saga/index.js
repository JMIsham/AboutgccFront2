
import * as authSaga from "./Auth.saga";
import {fork} from 'redux-saga/effects';
export default function* rootSaga(){
    yield [
        fork(authSaga.watchLogin),
    ];
}