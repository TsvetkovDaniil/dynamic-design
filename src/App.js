import './App.css'
import Portal from './pages/Portal/Portal'
import Rosdistant from './pages/Rosdistant/Rosdistant'
import { initPortalTranslator, initRosTranslator } from './i18n/i18n'

function App() {
  const domain = window.location.hostname

  if (domain === 'localhost' || domain === 'rosdistant.local') {
    initRosTranslator()
  } else if (domain === 'portal.local') {
    initPortalTranslator()
  }

  return (
    <div className='App'>
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
