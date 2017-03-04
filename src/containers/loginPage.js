/**
 * Created by Isham on 3/4/2017.
 */
import React from "react";
import LoginForm from "../components/LoginForm";

class LoginPage extends React.Component{

    doLogin(formData){
        console.log(formData);
    }
    render(){
        return (
            <LoginForm
                onSubmit = {this.doLogin.bind(this)}
            />
        );
    }

}
export default LoginPage;