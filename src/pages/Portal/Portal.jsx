import React from 'react'
import classes from './Portal.module.css'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header/Header'
import AppRouter from '../../components/AppRouter'
import Footer from '../../components/Footer/Footer'
import { portalData } from './portalData'
import { portalRoutes } from './router/portalRoutes'

const Portal = () => {
  return (
    <div className={classes.rosdistant}>
      <div className={classes.body}></div>
      <BrowserRouter>
        <Header refs={portalData.refs} />
        <AppRouter routes={portalRoutes} />
        <Footer
          refs={portalData.refs}
          name={portalData.name}
          contacts={portalData.contacts}
        />
      </BrowserRouter>
    </div>
  )
}

export default Portal
