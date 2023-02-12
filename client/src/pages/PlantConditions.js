import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const PlantConditions = () => {
  const [currentPlant, setCurrentPlant] = useState(null)
    let { id } = useParams()
    const getConidtions = async () => {
    const response = await axios.get(`http://localhost:3001/api/plants/${id}`)
    setCurrentPlant(response.data.plant)
    console.log(response.data.plant)
  }
  useEffect(() =>{
    getConidtions()
  }, [id])
  
    return currentPlant && (
    <div className='plant-conditions'>
        <h2>
            {currentPlant.commonName}
        </h2>
        <p>
            ({currentPlant.scientificName})
        </p>
    </div>
  )
}

export default PlantConditions