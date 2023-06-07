import Main from '../pages/Main/Main'
import SchedulePage from '../pages/SchedulePage/SchedulePage'
import Theme from '../../../components/Theme/Theme'
import Login from '../../../components/Login/Login'

export const privateRosdistantRoutes = [
  { path: '/main', component: Main, exact: true },
  { path: '/schedule', component: SchedulePage, exact: true },
  { path: '/theme', component: Theme, exact: true },
]

export const publicRosdistantRoutes = [
  { path: '/login', component: Login, exact: true },
]
