import { useEffect, useState } from "react";
import { useParams, Link, } from "react-router-dom";
import axios from "axios";

function PlanetPage(){

    const[planetDetails, setPlanetDetails] = useState({})
        let {id} = useParams()
        console.log(id)
    useEffect(() => {
        const getPlanet = async() => {
        const response = await axios.get(`https://swapi.dev/api/planets/`)
        setPlanetDetails(response.data.results[id])
    }
    getPlanet()
    },[])
    
    return (
        <div>
    <h1>{planetDetails.name}</h1>
        <li>Diameter: {planetDetails.diameter}</li>
        <li>Climate: {planetDetails.climate}</li>
        <li>Gravity: {planetDetails.gravity}</li>
        <li>Terrain: {planetDetails.terrain}</li>
        <li>Population: {planetDetails.population}</li>
    <Link to='/planets'>Return to Planets</Link>
    </div>

    )
}

export default PlanetPage