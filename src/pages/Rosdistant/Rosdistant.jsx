import React from 'react'
import classes from './Rosdistant.module.css'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import { refs, input, color, name } from './data'

const Rosdistant = () => {
  return (
    <div className={classes.rosdistant}>
      <Header refs={refs} bgColor={color} />
      <Info input={input} color={color} name={name} />
    </div>
  )
}

export default Rosdistant
