import React from 'react'
import Info from '../../../components/Info/Info'
import { rsData } from '../rosdistantData'

const About = () => {
  return (
    <div>
      <Info input={rsData.input} color={rsData.color} name={rsData.name} />
    </div>
  )
}

export default About
