import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'





const PlantConditions = () => {
  const [currentPlant, setCurrentPlant] = useState(null)
  const [update, setUpdate] = useState(false) 
  const [formData, setFormData] = useState({}) 
 
  
  
  let { id } = useParams()
    const getConidtions = async () => {
    const response = await axios.get(`/api/plants/${id}`)
    setCurrentPlant(response.data.plant)
    
   
  }
  useEffect(() =>{
    getConidtions()
  }, [id])

  useEffect(() =>{
    setFormData(currentPlant)
    
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
    axios.put(`http://localhost:3001/api/plants/${id}`, formData)
    setUpdate(false)
    navigate(`/plants/${id}`)


  }  
  const deletePlant = () => {
    const deleted = axios.delete(`http://localhost:3001/api/plants/${id}`)
    if(deleted) {
      alert('Plant Deleted!')
    }
  }

 const addToGarden = () => {
    const newPlant = {
      ...currentPlant,
      garden: !currentPlant.garden
    }
    axios.put(`http://localhost:3001/api/plants/${id}`, newPlant)
    navigate('/mygarden')
 }
    return currentPlant && (
    <div className='plant-conditions'>
        
        <h2>
            {currentPlant.commonName}
        </h2>
        
        <p>
            ({currentPlant.scientificName})
        </p>
        <div className='first-three condition-grid'>
        <p className='con-item'>Water: {formData.water}</p>
        <p className='con-item'>Sun Exposure: {formData.sunExposure}</p>
        <p className='con-item'>Mature Size: {formData.matureSize} IN</p>
        </div>
        <div className='condition-img-container'>
        <img src={currentPlant.img} className='condition-img'/>
        </div>
        <div className='first-three condition-grid'>
        <p className='con-item'>Soil Type: {formData.soilType}</p>
        <p className='con-item'>Soil PH Level: {formData.soilPHAvg}</p>
        <p className='con-item'>Hardiness Zone: {formData.hardinessZone}</p>
        </div>
        
        
      
        <Link to={'/plantlist'} className='link'>
        <button onClick={deletePlant} className='con-item con-btn' >Delete Plant</button>
        </Link>
        <button onClick={toggleUpdate} className='con-item con-btn'>Update Plant</button>
        <button onClick={addToGarden} className='con-item con-btn'>{currentPlant.garden ? 'Remove from garden' : 'Add to my garden'}</button>
        {update && <form onSubmit={handleSub} className='form-container con-btn'>
          
         
          <input type="text" name="sunExposure"value={formData.sunExposure} onChange={handleChange} className='form-btn'/>
          <input type="number" name="matureSize" value={formData.matureSize} onChange={handleChange} className='form-btn'/>
          <input type="text" name="soilType" value={formData.soilType} onChange={handleChange} className='form-btn'/>
          <input type="number" name="soilPHAvg" value={formData.soilPHAvg} onChange={handleChange} className='form-btn'/>
          <input type="number" name="hardinessZone" value={formData.hardinessZone} onChange={handleChange} className='form-btn'/>
          <input type="text" name="water" value={formData.water} onChange={handleChange} className='form-btn'/>
          
          
          <button>Update Plant</button>
          </form>}
    </div>
  )
}

export default PlantConditions