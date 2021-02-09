import React from "react";
import style from "../RandomPlanet.module.css";


function PlanetView(props) {
    return (
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planeta.id}.jpg`} alt="planet" className={style.planet} />
            <div className={style.infoPlanet}>
                <h2 className={style.namePlanet}>{props.planeta.name}</h2>
                <ul className={style.list}>
                    <li className={style.item}>Population: {props.planeta.population}</li>
                    <li className={style.item}>Rotation Period {props.planeta.rotationPeriod}</li>
                    <li className={style.item}>Diameter {props.planeta.diameter}</li>
                </ul>
            </div>
        </>
    )
}

export default PlanetView;