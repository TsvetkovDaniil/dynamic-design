import './App.css'
import Portal from './pages/Portal/Portal'
import Rosdistant from './pages/Rosdistant/Rosdistant'
import { initPortalTranslator, initRosTranslator } from './i18n/i18n'
import { AuthContext } from './context'
import { useEffect, useState } from 'react'

function App() {
  const domain = window.location.hostname

  if (domain === 'localhost' || domain === 'rosdistant.localhost') {
    initRosTranslator()
  } else if (domain === 'portal.localhost') {
    initPortalTranslator()
  }

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <div className='App'>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      >
        {domain === 'rosdistant.localhost' ? (
          <Rosdistant />
        ) : domain === 'portal.localhost' ? (
          <Portal />
        ) : (
          <Rosdistant />
        )}
      </AuthContext.Provider>
    </div>
  )
}

export default App
