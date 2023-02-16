import React from 'react'
import axios from 'axios'
import Plant from '../components/Plant'
import {useState, useEffect} from 'react'

const AllPlants = () => {
   const [currentPlants, setCurrentPlants] = useState([])
   const getPlants = async () => {
    const response = await axios.get('/api/plants')
    setCurrentPlants(response.data.plants)
   
   }

   useEffect(() =>{
    getPlants()
   }, [])

  const allPlants = currentPlants.map((plant) => (
    <Plant
    key={plant._id}
    commonName = {plant.commonName}
    scientificName={plant.scientificName}
    id={plant._id}
    img={plant.img}
   />
  ))
    
    return (
    <div>
      <h1 className='titles'>All Plants</h1>
    <div className='plant-list container-grid'>
       {allPlants}
    </div>
    </div>
  )
}

export default AllPlants