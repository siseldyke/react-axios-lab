import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

 function FilmList(){
    
    const[films, setFilms] = useState([])

useEffect(() => {
const getFilms = async () =>{
    const response = await axios.get(`https://swapi.dev/api/films/`)
    
    setFilms(response.data.results)
    }
getFilms()   
    
}, [])
    
    
    return(
        <div>
          {films.map((film , index) =>(
            <Link to={`/films/${index}`}>
            <h1 key = {index}>
                name: {film.title}
            </h1>
            </Link>
          )
        )}  
        </div>
    )}



export default FilmList ;