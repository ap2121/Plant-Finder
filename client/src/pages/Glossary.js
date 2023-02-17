import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import GlossCard from '../components/GlossCard'

const Glossary = () => {
 const [currentGloss, setCurrentGloss] = useState([])
 const getGlossy = async () => {
  const response = await axios.get('/api/gloss')
  setCurrentGloss(response.data.defs)
  
 } 

 useEffect(()=>{
    getGlossy()
 }, [])

const glossItems = currentGloss.map((x) =>(
  <GlossCard
  key={x._id}
  term={x.term}
  def={x.def}
/>
))
 
  
  return (
    <div className='glossary-container'>
      <h2>Glossary</h2>
      <div className='grid-container'>
      {glossItems}
      </div>
      
        
    </div>
  )
}

export default Glossary