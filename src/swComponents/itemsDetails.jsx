import React from "react";
import ItemDetails, { Record } from "../components/PersonDetails/ItemDetails";
import getBody from "../api/api";
import withDetails from "../hoc/withDetails";
import ItemView from "../components/PersonDetails/ItemView/PersonView";

const api = new getBody();

const detalisWrapper = (Wrapper, child) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {child}
            </Wrapper>
        )
    }
}


const WrapperPerson = detalisWrapper(ItemView, [<Record label="Birth year" field="birthYear" />,
<Record label="Eye Сolor" field="eyeСolor" />,
<Record label="Gender" field="gender" />,
<Record label="Hair color" field="hairСolor" />])

const WrapperPlanets = detalisWrapper(ItemView, [<Record label="Population" field="population" />,
<Record label="Diameter" field="diameter" />,
<Record label="Rotation period" field="rotationPeriod" />])

const WrapperStarships = detalisWrapper(ItemView, [<Record label="consumables" field="consumables" />,
<Record label="hyperdrive Rating" field="hyperdriveRating" />])

const PersonDetails = withDetails(WrapperPerson, api.getPerson, api.updateImgPerson)
const PlanetsDetails = withDetails(WrapperPlanets, api.getPlanet, api.updateImgPlanet)
const StarshipsDetails = withDetails(WrapperStarships, api.getStarship, api.updateImgStarships)


export {
    PersonDetails,
    PlanetsDetails,
    StarshipsDetails
}