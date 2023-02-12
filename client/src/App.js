import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Plant from './components/Plant'
import Glossary from './pages/Glossary'
import Home from './pages/Home'
import Regions from './pages/Regions'
import AllPlants from './pages/AllPlants'
import ShowPlants from './pages/ShowPlants'
import AddPlant from './pages/AddPlant'
import './App.css'

import PlantConditions from './pages/PlantConditions'

function App() {
  return (
    <div>
    <Nav /> 
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/glossary' element={<Glossary/>}/>
        <Route path='/regions' element={<Regions/>}/>
        <Route path='/plantlist' element={<AllPlants/>}/>
        <Route path='/addplant' element={<AddPlant/>}/>
        <Route path="/plants/:id" element={<PlantConditions/>}/>
        <Route path='/regions/:r_id' element={<ShowPlants/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
