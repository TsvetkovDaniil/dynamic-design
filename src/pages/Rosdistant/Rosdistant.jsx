import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { rsData } from './rosdistantData'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AppRouter from '../../components/AppRouter'
import {
  privateRosdistantRoutes,
  publicRosdistantRoutes,
} from './router/rosdistantRoutes'
import classes from './Rosdistant.module.css'
import { useTheme } from '../../hooks/useTheme'
import Login from '../../components/Login/Login'
import { AuthContext } from '../../context'
import AdminMenu from '../../components/AdminMenu/AdminMenu'

const Rosdistant = () => {
  useTheme('rosdistant')

  const { isAuth, setIsAuth } = useContext(AuthContext)
  return (
    <div className={classes.rosdistant}>
      <BrowserRouter>
        {isAuth ? (
          <>
            <Header refs={rsData.refs} />
            <AppRouter routes={privateRosdistantRoutes} def='/main' />
            <Footer
              refs={rsData.refs}
              name={rsData.name}
              contacts={rsData.contacts}
            />
          </>
        ) : (
          <Login title='rosdistant' />
        )}
      </BrowserRouter>
    </div>
  )
}

export default Rosdistant
