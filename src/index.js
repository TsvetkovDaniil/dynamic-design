import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './themes/light.css'
import './themes/dark.css'
import './themes/dark-blue.css'
import './themes/dark-red.css'
import './themes/rosdistant.css'
import './themes/portal.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
)
