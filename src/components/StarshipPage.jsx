import { useEffect, useState } from "react";
import { useParams, Link, } from "react-router-dom";
import axios from "axios";

function StarshipPage(){

    const[starshipDetails, setStarshipDetails] = useState({})
        let {id} = useParams()
        console.log(id)
    useEffect(() => {
        const getStarship = async() => {
        const response = await axios.get(`https://swapi.dev/api/starships/`)
        setStarshipDetails(response.data.results[id])
    }
    getStarship()
    },[])
    
    return (
        <div>
    <h1>{starshipDetails.name}</h1>
        <li>Model: {starshipDetails.model}</li>
        <li>Manufacturer: {starshipDetails.manufacturer}</li>
        <li>Length {starshipDetails.length}</li>
        <li>Cargo Capacity: {starshipDetails.cargo_capacity}</li>
        <li>Class {starshipDetails.starship_class}</li>
    <Link to='/starships'>Return to Starships</Link>
    </div>

    )
}

export default StarshipPage