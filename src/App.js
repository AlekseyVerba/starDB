import React, { Component } from "react";
import Header from "./components/Header/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import Secret from "./components/Secret/Secret";
import Login from "./components/Login/Login";
import BlockFlex from "./services/BlockFlex/BlockFlex";
import { Provider, Consumer } from "./services/Context/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import style from "./App.module.css";
import {
    PersonWrap,
    PlanetWrap,
    StarshipsWrap
} from "./swComponents/itemLists";

import {
    PersonDetails,
    PlanetsDetails,
    StarshipsDetails
} from "./swComponents/itemsDetails";

import getBody from "./api/api";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 9,
            isLogin: false
        }
        this.api = new getBody();
    }

    getIdPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    logged = () => {
        this.setState((s) => ({
            isLogin: !s.isLogin
        }))
    }


    render() {

        return (
            <Provider value="Привет">
                <BrowserRouter>
                    <div className={style.app}>
                        <Header />
                        <RandomPlanet />
                        <Switch>
                            <Route path="/" exact render={() => <h1>Welcome to Star DB</h1>} />
                            <Route path="/persons" exact component={() => <PersonWrap getIdPersonSelected={this.getIdPersonSelected} />} />
                            <Route path="/persons/:id" component={({ match }) => <PersonDetails personId={match.params.id} />} />
                            <Route path="/planets" exact component={() => <PlanetWrap getIdPersonSelected={this.getIdPersonSelected} />} />
                            <Route path="/planets/:id" component={({ match }) => <PlanetsDetails personId={match.params.id} />} />
                            <Route path="/starships" exact component={() => <StarshipsWrap getIdPersonSelected={this.getIdPersonSelected} />} />
                            <Route path="/starships/:id" component={({ match }) => <StarshipsDetails personId={match.params.id} />} />
                            <Route path="/secret" component={() => <Secret isLogin={this.state.isLogin} />} />
                            <Route path="/login" component={() => <Login isLogin={this.state.isLogin} logged={this.logged} />} />
                            <Route render={() => <h1>Такой страницы не существует</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;


{/* <div style={{ display: "flex", marginTop: "35px" }}>
                    <ItemList getIdPersonSelected={this.getIdPersonSelected} getData={this.api.getAllPlanets}
                        renderFunction={(item) => `${item.name} (${item.population})`} />
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
                <div style={{ display: "flex", marginTop: "35px" }}>
                    <ItemList getIdPersonSelected={this.getIdPersonSelected} getData={this.api.getAllStarships}
                        renderFunction={(item) => `${item.name} (${item.MGLT})`} />
                    <PersonDetails personId={this.state.selectedPerson} />
                </div> */}