import React, { Component } from "react";
import style from "./RandomPlanet.module.css";

import getBody from "../../api/api";
import Preloader from "../../services/Preloader";
import PlanetView from "./PlanetView/PlanetView";
import Error from "../../Error/Error";

class RandomPlanet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
            isLoading: true,
            isError: false
        }

    }

    onPlanetLoaded = (planet) => {
        this.setState({
            ...planet,
            isLoading: false
        })
    }

    onGetError = () => {
        this.setState({
            isLoading: false,
            isError: true
        })
    }

    componentDidMount() {
        this.getRandomPlanet();
        this.interval = setInterval(this.getRandomPlanet, 5000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getRandomPlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        const api = new getBody();
        api.getPlanet(id)
            .then(body => this.onPlanetLoaded(body))
            .catch(() => this.onGetError())
    }

    render() {

        const isLoadingOrisError = (this.state.isLoading || this.state.isError)
        const error = this.state.isError ? <Error /> : null
        const isPreloader = this.state.isLoading ? <Preloader /> : null
        const isPlanetaView = !isLoadingOrisError ? <PlanetView planeta={this.state} /> : null
        return (
            <>
                <div className={style.randomPlanet}>
                    {error}
                    {isPreloader}
                    {isPlanetaView}
                </div>
            </>
        )
    }
}

export default RandomPlanet;