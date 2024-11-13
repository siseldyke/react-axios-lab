import { useEffect, useState } from "react";
import { useParams, Link, } from "react-router-dom";
import axios from "axios";

function CharacterPage(){

    const[characterDetails, setCharacterDetails] = useState({})
        let {id} = useParams()
        console.log(id)
    useEffect(() => {
        const getCharacter = async() => {
        const response = await axios.get(`https://swapi.dev/api/people/`)
        setCharacterDetails(response.data.results[id])
    }
    getCharacter()
    },[])
    
    return (
        <div>
    <h1>{characterDetails.name}</h1>
        <li>Height: {characterDetails.height}</li>
        <li>Hair Color: {characterDetails.hair_color}</li>
        <li>Gender: {characterDetails.gender}</li>
        <li>Birth Year: {characterDetails.birth_year}</li>
        <li>Home World: {characterDetails.homeworld}</li>
    <Link to='/people'>Return to Characters</Link>
    </div>

    )
}

export default CharacterPage