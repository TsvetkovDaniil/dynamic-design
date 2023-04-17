import Theme from '../../../components/Theme/Theme'
import InstitutePage from '../pages/InstitutePage/InstitutePage'
import Main from '../pages/Main/Main'

export const portalRoutes = [
  { path: '/main', component: Main, exact: true },
  { path: '/theme', component: Theme, exact: true },
  { path: '/institute', component: InstitutePage, exact: true },
]
