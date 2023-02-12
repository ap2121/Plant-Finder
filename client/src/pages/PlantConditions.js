import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



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
  const deletePlant = () => {
    const deleted = axios.delete(`http://localhost:3001/api/plants/${id}`)
    if(deleted) {
      alert('Plant Deleted!')
    }
  }
    return currentPlant && (
    <div className='plant-conditions'>
        <h2>
            {currentPlant.commonName}
        </h2>
        <p>
            ({currentPlant.scientificName})
        </p>
        <Link to={'/plantlist'}>
        <button onClick={deletePlant}>Delete Plant</button>
        </Link>
        <button>Update Plant</button>
    </div>
  )
}

export default PlantConditions