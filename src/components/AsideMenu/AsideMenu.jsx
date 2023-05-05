import React from 'react'
import classes from './AsideMenu.module.css'
import { Link } from 'react-router-dom'

const AsideMenu = () => {
  return (
    <aside className={classes.asideMenu}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <h3 className={classes.header}>Сервисы</h3>
          <li className={classes.listItem}>
            <Link className={classes.ref} to="http://portal.local:3000">
              Образовательный портал
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.ref} to="http://rosdistant.local:3000">
              Росдистант
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideMenu
