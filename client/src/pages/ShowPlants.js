import React from 'react'
import Plant from '../components/Plant'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowPlants = () => {
  const [currentPlants, setCurrentPlants] = useState([])
  let {r_id} = useParams()
  const getPlants = async () => {
    const response = await axios.get(`/api/plants/region/${r_id}`)
    setCurrentPlants(response.data.plants)
    
  }

  useEffect(() => {
    getPlants()
  }, [r_id])

  const plantsByRegion = currentPlants.map((plant) =>(
    <Plant
    key={plant._id}
    commonName = {plant.commonName}
    scientificName={plant.scientificName}
    id={plant._id}
    img={plant.img}
    
   />
  ))


  return currentPlants && (
    <div className='container-grid'>
      {plantsByRegion}
      </div>
  )
}

export default ShowPlants