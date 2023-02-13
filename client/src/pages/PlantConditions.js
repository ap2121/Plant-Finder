import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




const PlantConditions = () => {
  const [currentPlant, setCurrentPlant] = useState(null)
  const [update, setUpdate] = useState(false) 
  const [formData, setFormData] = useState({}) 
 
 
  
  let { id } = useParams()
    const getConidtions = async () => {
    const response = await axios.get(`http://localhost:3001/api/plants/${id}`)
    setCurrentPlant(response.data.plant)
   
  }
  useEffect(() =>{
    getConidtions()
  }, [id])

  useEffect(() =>{
    setFormData(currentPlant)
    console.log(currentPlant)
  },[currentPlant])
  
  const toggleUpdate = () => {
    setUpdate(!update)
    }
    
    const handleChange = (e) => {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [e.target.name]: e.target.value

          
        }
       
      
      })
     
    }
    const navigate = useNavigate()
    const handleSub = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3001/api/plants/${id}`, {...formData})
    setUpdate(false)
    navigate(`/plants/${id}`)


  }  
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
        <Link to={'/plantlist'} className='link'>
        <button onClick={deletePlant}>Delete Plant</button>
        </Link>
        <button onClick={toggleUpdate}>Update Plant</button>
        {update && <form onSubmit={handleSub}>
          <input type="text" name="commonName" value={formData.commonName} onChange={handleChange}/>
          <input type="text" name="scientificName"value={formData.scientificName} onChange={handleChange}/>
          <input type="text" name="sunExposure"value={formData.sunExposure} onChange={handleChange}/>
          <input type="number" name="matureSize" value={formData.matureSize} onChange={handleChange}/>
          <input type="text" name="soilType" value={formData.soilType} onChange={handleChange}/>
          <input type="number" name="soilPHAvg" value={formData.soilPHAvg} onChange={handleChange}/>
          <input type="number" name="hardinessZone" value={formData.hardinessZone} onChange={handleChange}/>
          <input type="text" name="water" value={formData.water} onChange={handleChange}/>
          
          
          <button>Update Plant</button>
          </form>}
    </div>
  )
}

export default PlantConditions