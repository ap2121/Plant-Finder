import React from 'react'
import Region from '../components/Region'
import {useState, useEffect} from 'react'
import axios from 'axios'
const Regions = () => {
  const [currentRegions, setCurrentRegions] = useState([])
  const getRegions = async () => {
    const response = await axios.get('http://localhost:3001/api/regions')
    setCurrentRegions(response.data.regions)
    
  }

  useEffect(() =>{
    getRegions()
  }, [])
  const allRegions = currentRegions.map((region) => (
    <Region
    key={region._id}
    name={region.name}
    r_id={region._id}
    rImg={region.rImg}
    />
  ))
    return (
    
    <div className='all-region'>
      <h1 className='titles'>Regions</h1>
    <div className='region-container'>
        {allRegions}
    </div>
    </div>
  )
}

export default Regions