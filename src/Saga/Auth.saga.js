/**
 * Created by Isham on 3/4/2017.
 */
import * as api from "../Connectivity/api";
import {call} from 'redux-saga/effects';
import takeLatest from "redux-saga";
import * as types from '../constants/actionTypes';


export function* doLogin(action){
    console.log("called!!");
    const {username,password} = action.payload;
    const response = yield call(api.login,username,password);
    return response;


}
export function* watchLogin(){
    // console.log("loginCalled");
    yield takeLatest(types.LOGIN_REQUESTED,doLogin);
}