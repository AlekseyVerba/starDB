import React, { Component } from "react";
import style from "./ItemList.module.css";


function ItemList(props) {
    return (
        <ul className={style.itemList}>
            { props.items}
        </ul>
    )

}

export default ItemList;

