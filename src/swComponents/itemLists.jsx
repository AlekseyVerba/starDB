import React from "react";
import withData from "../hoc/withData";
import ItemList from "../components/ItemList/ItemList";
import getBody from "../api/api";
import { withRouter } from "react-router-dom"


const api = new getBody();

const withWrap = ((Wrapper, fn) => {
    return (props) => {
        return (
            <Wrapper {...props} renderFunction={fn} />
        )
    }
})

const PersonLists = withData(ItemList, api.getAllPeople);
const PlanetLists = withData(ItemList, api.getAllPlanets);
const StarshipsLists = withData(ItemList, api.getAllStarships);
const PersonWrap = withWrap(withRouter(PersonLists), (item) => `${item.name}`)
const PlanetWrap = withWrap(withRouter(PlanetLists), (item) => `${item.name}`)
const StarshipsWrap = withWrap(withRouter(StarshipsLists), (item) => `${item.name}`)

export {
    PersonWrap,
    PlanetWrap,
    StarshipsWrap
}