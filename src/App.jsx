import './App.css'

import { Route, Routes } from 'react-router-dom';
import StarshipList from './components/StarshipList'
import NavBar from './components/Navbar';
import PlanetList from './components/PlanetList';
import StarshipPage from './components/StarshipPage';

const App = () => {


return (
<>
    <NavBar/>
    <h1>In a Galaxy far far away</h1>
    <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/starships" element={<StarshipList  />}/>
        <Route path='/starships/:id' element={<StarshipPage />}/>
        <Route path='/planets'  element={<PlanetList/>}/>


    </Routes>
</>
)
}

export default App
