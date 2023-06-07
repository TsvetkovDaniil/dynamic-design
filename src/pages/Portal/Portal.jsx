import React, { useContext } from 'react'
import classes from './Portal.module.css'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header/Header'
import AppRouter from '../../components/AppRouter'
import Footer from '../../components/Footer/Footer'
import { portalData } from './portalData'
import { portalRoutes } from './router/portalRoutes'
import { useTheme } from '../../hooks/useTheme'
import { AuthContext } from '../../context'
import Login from '../../components/Login/Login'

const Portal = () => {
  useTheme('portal')

  const { isAuth, setIsAuth } = useContext(AuthContext)
  return (
    <div className={classes.portal}>
      <BrowserRouter>
        {isAuth ? (
          <>
            <Header refs={portalData.refs} />
            <AppRouter routes={portalRoutes} />
            <Footer
              refs={portalData.refs}
              name={portalData.name}
              contacts={portalData.contacts}
            />
          </>
        ) : (
          <Login title='portal' />
        )}
      </BrowserRouter>
    </div>
  )
}

export default Portal
