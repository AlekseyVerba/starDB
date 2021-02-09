import React from "react";
import { Redirect } from "react-router-dom";

const Login = (props) => {
    if (props.isLogin) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div>
            <button onClick={props.logged}>залогиниться</button>
        </div>
    )
}

export default Login;