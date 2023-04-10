import Schedule from '../../../components/Schedule/Schedule'
import About from '../pages/About'

export const rosRoutes = [
  { path: '/about', component: About, exact: true },
  { path: '/schedule', component: Schedule, exact: true },
]
