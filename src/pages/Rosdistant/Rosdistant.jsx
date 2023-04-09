import React from 'react'
import classes from './Rosdistant.module.css'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import { rsData } from './rosdistantData'
import Footer from '../../components/Footer/Footer'

const Rosdistant = () => {
  return (
    <div className={classes.rosdistant}>
      <Header refs={rsData.refs} bgColor={rsData.color} />
      <Info input={rsData.input} color={rsData.color} name={rsData.name} />
      <Footer
        refs={rsData.refs}
        color={rsData.color}
        name={rsData.name}
        contacts={rsData.contacts}
      />
    </div>
  )
}

export default Rosdistant
