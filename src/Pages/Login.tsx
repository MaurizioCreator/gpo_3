import React from 'react';
import Btn from "../Components/UI/Btn/Btn";
import back from "../Assets/back_sign_in.png"
import background from "../Assets/background.svg";
import "../Styles/Login.scss"

const Login = () => {
    return (
        <div className="sign_in" style={{backgroundImage: `url(${back})`}}>
            <form className="sign_in__form">
                <h1>Sign in</h1>
                <input type="email"/>
                <input type="password"/>
                <Btn>Sign in</Btn>
            </form>
        </div>
    );
};

export default Login;