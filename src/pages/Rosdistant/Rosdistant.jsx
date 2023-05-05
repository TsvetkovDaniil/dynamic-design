import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { rsData } from './rosdistantData'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AppRouter from '../../components/AppRouter'
import { rosdistantRoutes } from './router/rosdistantRoutes'
import classes from './Rosdistant.module.css'
import { useTheme } from '../../hooks/useTheme'

const Rosdistant = () => {
  useTheme('rosdistant')

  return (
    <div className={classes.rosdistant}>
      <div className={classes.body}>
        <BrowserRouter>
          <Header refs={rsData.refs} />
          <div className={classes.main}>
            <AppRouter routes={rosdistantRoutes} />
          </div>
          <Footer
            refs={rsData.refs}
            name={rsData.name}
            contacts={rsData.contacts}
          />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Rosdistant
