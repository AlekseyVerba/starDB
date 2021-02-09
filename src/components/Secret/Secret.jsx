import React from "react";
import { Redirect } from "react-router-dom";

const Secret = (props) => {
    if (props.isLogin) {
        return (
            <div>
                <h2>Это секретная страница</h2>
            </div>
        )
    }

    return (
        <Redirect to="/login" />
    )
}

export default Secret;