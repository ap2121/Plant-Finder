import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Plant from '../components/Plant'


const MyGarden = () => {
  const [gardenPlants, setGardenPlants] = useState([])
  const getGardenPlants = async () => {
    const response = await axios.get('http://localhost:3001/api/gardenplants')
    setGardenPlants(response.data.plants)
  }

  useEffect(() => {
    getGardenPlants()
  }, [])

  const renderGarden = gardenPlants.map((plant) => (
    <Plant
    key={plant._id}
    commonName={plant.commonName}
    scientificName={plant.scientificName}
    id={plant._id}
    img={plant.img}


    />
  ))
 
    return(
    <div className='all-garden'>
        
        <div className='container-grid my-garden-margin'>
        {renderGarden}
        </div>
        
    </div>
  )
}


export default MyGarden