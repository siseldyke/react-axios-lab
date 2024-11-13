import { useEffect, useState } from "react";
import { useParams, Link, } from "react-router-dom";
import axios from "axios";

function FilmPage(){

    const[filmDetails, setFilmDetails] = useState({})
        let {id} = useParams()
        
    useEffect(() => {
        const getFilm = async() => {
        const response = await axios.get(`https://swapi.dev/api/films/`)
        setFilmDetails(response.data.results[id])
    }
    getFilm()
    },[])
    
    return (
        <div>
    <h1>{filmDetails.title}</h1>
        <li>Director: {filmDetails.director}</li>
        <li>Producer: {filmDetails.producer}</li>
        <li>Release Date: {filmDetails.release_date}</li>
        
    <Link to='/films'>Return to Films</Link>
    </div>

    )
}

export default FilmPage