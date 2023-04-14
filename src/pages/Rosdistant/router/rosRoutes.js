import About from '../pages/About'
import SchedulePage from '../pages/SchedulePage'
import ThemePage from '../pages/ThemePage'

export const rosRoutes = [
  { path: '/about', component: About, exact: true },
  { path: '/schedule', component: SchedulePage, exact: true },
  { path: '/theme', component: ThemePage, exact: true },
]
