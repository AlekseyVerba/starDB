import React from "react";
import style from "./Error.module.css";
import star from "../assets/img/upload-e7813840-ff54-11e6-8de4-3fca8f1a8d29.png"

function Error(props) {

    return (
        <div className={style.error}>
            <img src={star} alt="star" className={style.starImg} />
            <h2>BOOM!</h2>
            <p>the death star exploded</p>
        </div>
    )
}

export default Error;