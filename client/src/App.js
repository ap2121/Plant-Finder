import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Glossary from './pages/Glossary'
import Home from './pages/Home'
import Regions from './pages/Regions'
import AllPlants from './pages/AllPlants'
import ShowPlants from './pages/ShowPlants'
import AddPlant from './pages/AddPlant'
import './App.css'

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
      </Routes>
    </main>
    </div>
  );
}

export default App;
