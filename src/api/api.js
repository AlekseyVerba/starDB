import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://swapi.dev/api/"
})

class getBody {
    getAllPeople = async () => {
        const res = await instance.get(`people`)
            .then(response => response.data.results)
        return res.map(this.transformPerson)
    }
    getPerson = async (id) => {
        const res = await instance.get(`people/${id}`)
            .then(response => response.data)
        return this.transformPerson(res)
    }
    getAllStarships = async () => {
        const res = await instance.get(`starships`)
            .then(response => response.data.results)
        return res.map(this.transformStarship)
    }
    getStarship = async (id) => {
        const res = await instance.get(`starships/${id}`)
            .then(response => response.data)
        return this.transformStarship(res)
    }
    getAllPlanets = async () => {
        const res = await instance.get(`planets`)
            .then(response => response.data.results)
        return res.map(this.transformPlanet)
    }
    getPlanet = async (id) => {
        const res = await instance.get(`planets/${id}`)
            .then(response => response.data)
        return this.transformPlanet(res)
    }

    getId(url) {
        const regExp = /\/([0-9]*)\/$/
        const id = url.match(regExp)[1]
        return id
    }
    updateImgStarships = (id) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id.id}.jpg`
    }
    updateImgPerson = (id) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id.id}.jpg`
    }
    updateImgPlanet = (id) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id.id}.jpg`
    }

    transformPlanet = (planet) => {

        const id = this.getId(planet.url);
        return {
            id: id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    transformPerson = (person) => {
        const id = this.getId(person.url);
        return {
            id: id,
            birthYear: person.birth_year,
            eyeСolor: person.eye_color,
            gender: person.gender,
            hairСolor: person.hair_color,
            height: person.height,
            mass: person.mass,
            name: person.name,
            skinСolor: person.skin_color
        }
    }

    transformStarship = (starship) => {
        const id = this.getId(starship.url);
        return {
            id: id,
            MGLT: starship.MGLT,
            cargoСapacity: starship.cargo_capacity,
            consumables: starship.consumables,
            costInCredits: starship.cost_in_credits,
            hyperdriveRating: starship.hyperdrive_rating,
            length: starship.length,
            manufacturer: starship.manufacturer,
            name: starship.name
        }
    }


}

export default getBody;

