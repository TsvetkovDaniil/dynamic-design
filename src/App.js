import { useEffect } from 'react'
import './App.css'
import Portal from './pages/Portal/Portal'
import Rosdistant from './pages/Rosdistant/Rosdistant'

function App() {
  const domain = window.location.hostname

  return (
    <div className="App">
      {domain === 'rosdistant.local' ? (
        <Rosdistant />
      ) : domain === 'portal.local' ? (
        <Portal />
      ) : (
        <Rosdistant />
      )}
    </div>
  )
}

export default App
