import Main from '../pages/Main/Main'
import SchedulePage from '../pages/SchedulePage/SchedulePage'
import Theme from '../../../components/Theme/Theme'

export const rosdistantRoutes = [
  { path: '/main', component: Main, exact: true },
  { path: '/schedule', component: SchedulePage, exact: true },
  { path: '/theme', component: Theme, exact: true },
]
