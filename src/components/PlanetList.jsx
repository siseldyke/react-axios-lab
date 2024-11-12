import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

 function PlanetList(){
    
    const[planets, setPlanets] = useState([])

useEffect(() => {
const getPlanets = async () =>{
    const response = await axios.get(`https://swapi.dev/api/planets/`)
    console.log(response.data.results)
    setPlanets(response.data.results)
    }
getPlanets()   
    
}, [])
    
    
    return(
        <div>
          {planets.map((planet , index) =>(
            <h1 key = {index}>
                name: {planet.name}
            </h1>
          )
        )}  
        </div>
    )}



export default PlanetList ;