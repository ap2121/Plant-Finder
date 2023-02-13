import React from 'react'
import axios from 'axios'  
import { useState } from 'react'
const AddPlant = () => {
  const [formData, setFormData] = useState({
    commonName: "",
    scientificName: "",
    img: "",
    sunExposure: "",
    matureSize: "",
    soilType: "",
    soilPHAvg: "",
    hardinessZone: "",
    water: "",
    nativeRegion: ""
})
console.log(formData)
const handleChange = (e) => {
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [e.target.name]: e.target.value
    }
  })
 
}

  return (
    <div>
    <h1 className='form-title'>Add a new plant!</h1>
    <form className='form-container'>
    <input type="text" placeholder='Common Name' name='commonName' onChange={handleChange} value={formData.commonName}/>
    <input type="text" placeholder='Botanical Name' name='botanicalName' onChange={handleChange}/>
    <input type="text" placeholder="Image URL" name="Image" onChange={handleChange}/>
    <input type="text" placeholder='Sun Exposure' name="sunExposure" onChange={handleChange}/>
    <input type="number" placeholder='Mature Size' name="matureSize" min="1" onChange={handleChange}/>
    <input type="text" placeholder='Soil Type' name='soilType' onChange={handleChange}/>
    <input type='number' placeholder="Soil PH Level" name="soilPHAvg" min="1" max="14" onChange={handleChange}/>
    <input type='number' placeholder='Hardiness Zone' name="hardinessZone" min="1" max="13" onChange={handleChange}/>
    <input type="text" placeholder='Water' name='water' onChange={handleChange}/>
    </form>
  </div>
  )
}

export default AddPlant