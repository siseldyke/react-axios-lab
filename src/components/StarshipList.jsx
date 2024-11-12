import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

 function StarshipList(){
    
    const[starships, setStarships] = useState([])

useEffect(() => {
const getStarships = async () =>{
    const response = await axios.get(`https://swapi.dev/api/starships`)
    console.log(response.data.results)
    setStarships(response.data.results)
    }
getStarships()   
    
}, [])
    
    
    return(
        <div>
          {starships.map((starship , index) =>(
                <Link to={`/starships/${index}`}>
                    
            <h1 key = {index}>
                name: {starship.name}
            </h1>
            </Link>
          )
        )}  
        </div>
    )}



export default StarshipList ;