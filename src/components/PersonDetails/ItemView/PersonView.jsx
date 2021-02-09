import React from "react";
import style from "../ItemDetails.module.css";

function PersonView(props) {
    return (
        <div className={style.personDetails}>
            <img src={props.state.idImg} alt="person" className={style.imgPerson} />
            <div className={style.infoPerson}>
                <h2 className={style.name}>{props.state.person.name}</h2>
                <ul className={style.list}>
                    <li>{props.value}</li>
                    {
                        React.Children.map(props.children, (child, index) => {
                            if (child === "" || child === " " || !child) {
                                return null
                            }

                            return React.cloneElement(child, { item: props.state.person })
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default PersonView;