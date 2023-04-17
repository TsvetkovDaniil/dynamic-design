import About from '../pages/About/About'
import SchedulePage from '../pages/SchedulePage/SchedulePage'
import ThemePage from '../pages/ThemePage/ThemePage'

export const rosdistantRoutes = [
  { path: '/about', component: About, exact: true },
  { path: '/schedule', component: SchedulePage, exact: true },
  { path: '/theme', component: ThemePage, exact: true },
]
