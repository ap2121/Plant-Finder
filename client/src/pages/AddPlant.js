import React from 'react'
import axios from 'axios'  
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    nativeRegion: "",
    garden: ""
})
console.log(formData)
const navigate = useNavigate()
const handleChange = (e) => {
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [e.target.name]: e.target.value
      
    }
   
  
  })
 
}
const handleSub  = (e) => {
  e.preventDefault()
  axios.post('/api/plants', 
   {...formData})
   navigate('/plantlist')
   
}
  return (
    <div>
    <h1 className='form-title'>Add a new plant!</h1>
    <form className='form-container' onSubmit={handleSub}>
    <input type="text" placeholder='Common Name' name='commonName' onChange={handleChange} value={formData.commonName}/>
    <input type="text" placeholder='Botanical Name' name='scientificName' onChange={handleChange} value={formData.scientificName}/>
    <input type="text" placeholder="Image URL" name="img" onChange={handleChange} value={formData.img}/>
    <input type="text" placeholder='Sun Exposure' name="sunExposure" onChange={handleChange} value={formData.sunExposure}/>
    <input type="number" placeholder='Mature Size' name="matureSize" min="1" onChange={handleChange} value={formData.matureSize}/>
    <input type="text" placeholder='Soil Type' name='soilType' onChange={handleChange} value={formData.soilType}/>
    <input type='number' placeholder="Soil PH Level" name="soilPHAvg" min="1" max="14" onChange={handleChange} value={formData.soilPHAvg}/>
    <input type='number' placeholder='Hardiness Zone' name="hardinessZone" min="1" max="13" onChange={handleChange} value={formData.hardinessZone}/>
    <input type="text" placeholder='Water' name='water' onChange={handleChange} value={formData.water}/>
    <select onChange={handleChange} name='nativeRegion' id={formData.nativeRegion} >
      <option value="">Native Region</option>
      <option value="63ead8b8135080f39d2dadc2">Southeast Asia</option>
      <option value="63ea908dc526c940ea68a722">North America</option>
      <option value="63ea908dc526c940ea68a723">South America</option>
      <option value="63ea908dc526c940ea68a726">Northern Africa</option>
      <option value="63ea908dc526c940ea68a724">Carribean</option>
      <option value="63ea908dc526c940ea68a725">Southern Europe</option>
    </select>
    <select onChange={handleChange} name="garden" id={formData.garden}>
      <option>Add to garden</option>
      <option value={true}>Yes</option>
      <option value={false}>No</option>
    </select>
    <button>Add Plant</button>
    
    
    
    
    </form>
  </div>
  )
}

export default AddPlant