import React from 'react'
import axios from 'axios'
import Plant from '../components/Plant'
import {useState, useEffect} from 'react'

const AllPlants = () => {
   const [currentPlants, setCurrentPlants] = useState([])
   const getPlants = async () => {
    const response = await axios.get('http://localhost:3001/api/plants')
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
   />
  ))
    
    return (
    <div className='plant-list container-grid'>
       {allPlants}
    </div>
  )
}

export default AllPlants