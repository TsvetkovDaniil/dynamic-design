import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { rsData } from './rosdistantData'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AppRouter from '../../components/AppRouter'
import { rosRoutes } from './router/rosRoutes'
import classes from './Rosdistant.module.css'

const Rosdistant = () => {
  return (
    <div className={classes.rosdistant}>
      <div className={classes.body}></div>
      <BrowserRouter>
        <Header refs={rsData.refs} />
        <AppRouter routes={rosRoutes} />
        <Footer
          refs={rsData.refs}
          name={rsData.name}
          contacts={rsData.contacts}
        />
      </BrowserRouter>
    </div>
  )
}

export default Rosdistant
