import React from 'react'
import { useParams } from 'react-router-dom'



const MeasurmentTechniques = () => {
    const params = useParams()
  return (
    <div><h1>{params.measurmentId}  MeasurmentTechniques</h1></div>
  )
}

export default MeasurmentTechniques