import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className={style.header}>
            <Link to="/" className={style.logo}>Star DB</Link>
            <ul className={style.list}>
                <li className={style.item}><Link to="/persons">People</Link></li>
                <li className={style.item}><Link to="/planets">Planets</Link></li>
                <li className={style.item}><Link to="/starships">Starships</Link></li>
                <li className={style.item}><Link to="/login">Login</Link></li>
                <li className={style.item}><Link to="/secret">Secret</Link></li>
            </ul>
        </div>
    )
}

export default Header