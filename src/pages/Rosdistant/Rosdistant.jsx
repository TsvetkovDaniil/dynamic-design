import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { rsData } from './rosdistantData'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AppRouter from '../../components/AppRouter'
import { rosRoutes } from './router/rosRoutes'

const Rosdistant = () => {
  return (
    <div>
      <BrowserRouter>
        <Header refs={rsData.refs} bgColor={rsData.color} />
        <AppRouter routes={rosRoutes} />
        <Footer
          refs={rsData.refs}
          color={rsData.color}
          name={rsData.name}
          contacts={rsData.contacts}
        />
      </BrowserRouter>
    </div>
  )
}

export default Rosdistant
