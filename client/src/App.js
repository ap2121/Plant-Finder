import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Glossary from './pages/Glossary'
import Home from './pages/Home'
import Regions from './pages/Regions'
import AllPlants from './pages/AllPlants'
import ShowPlants from './pages/ShowPlants'
 

function App() {
  return (
    <div>
    <Nav /> 
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/glossary' element={<Glossary/>}/>
        <Route path='/regions' element={<Regions/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
