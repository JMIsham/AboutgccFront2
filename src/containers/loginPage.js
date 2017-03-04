/**
 * Created by Isham on 3/4/2017.
 */
import React from "react";
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux';
import * as types from "../constants/actionTypes";
class LoginPage extends React.Component{

    doLogin(formData) {

        this.props.dispatch({
            type: types.LOGIN_REQUESTED,
            payload: {
                username: formData.username,
                password: formData.password
            }
        });
        console.log("form data",formData);
    }
    render(){
        return (
            <LoginForm
                onSubmit = {this.doLogin.bind(this)}
            />
        );
    }

}
export default connect()(LoginPage);
// export default LoginPage;
