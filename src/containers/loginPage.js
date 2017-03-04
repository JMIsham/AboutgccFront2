/**
 * Created by Isham on 3/4/2017.
 */
import React from "react";
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux';
import * as action from "../constants/actionTypes"
class LoginPage extends React.Component{

    doLogin(formData){
        console.log(formData);
        this.props.dispatch({
            type: action.LOGIN_REQUESTED,
            payload:{
                username: formData.username,
                password: formData.password
            }

            });
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
