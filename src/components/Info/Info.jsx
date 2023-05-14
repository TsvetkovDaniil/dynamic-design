import { useTranslation } from 'react-i18next'
import classes from './Info.module.css'
import AsideMenu from '../AsideMenu/AsideMenu'

const Info = ({ children, ...props }) => {
  const borderColor = '3px solid ' + props.color

  const { t, i18n } = useTranslation()

  return (
    <div className={classes.info}>
      <h1>{t(props.name)}</h1>
      <div
        className={classes.infoSection}
        style={{ borderTop: borderColor, borderBottom: borderColor }}
      >
        <AsideMenu />
        <div className={classes.childrenSection}>{children}</div>
      </div>
    </div>
  )
}

export default Info
