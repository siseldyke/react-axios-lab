import axios from "axios"
import { useState, useEffect } from 'react'
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils"
import { Link } from 'react-router-dom'

 function CharacterList(){
    
    const[characters, setCharacters] = useState([])

useEffect(() => {
const getCharacters = async () =>{
    const response = await axios.get(`https://swapi.dev/api/people/`)
    console.log(response.data.results)
    setCharacters(response.data.results)
    }
getCharacters()   
    
}, [])
    
    
    return(
        <div>
          {characters.map((character , index) =>(
            <Link to={`/people/${index}`}>
            <h1 key = {index}>
                name: {character.name}
            </h1>
            </Link>
          )
        )}  
        </div>
    )}



export default CharacterList;