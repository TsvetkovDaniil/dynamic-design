import React from 'react'
import classes from './AsideMenu.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AsideMenu = () => {
  const { t, i18n } = useTranslation()

  return (
    <aside className={classes.asideMenu}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <h3 className={classes.header}>{t('services')}</h3>
          <li className={classes.listItem}>
            <Link className={classes.ref} to='http://portal.localhost:3000'>
              {t('portal')}
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.ref} to='http://rosdistant.localhost:3000'>
              {t('rosdistant')}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideMenu
