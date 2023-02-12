import React from 'react'

const GlossCard = (props) => {
  return (
    <div className='def-container'>
        
        <h4 className='term'>{props.term}</h4>
        <p>{props.def}</p>
        
        
    </div>
  )
}

export default GlossCard