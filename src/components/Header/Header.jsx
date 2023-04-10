import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({ refs, bgColor }) => {
  return (
    <header className={classes.navbar} style={{ backgroundColor: bgColor }}>
      <nav className={classes.navbarInner}>
        <ul className={classes.nav}>
          {refs.map((r) => (
            <Link key={r.ref} to={r.ref} className={classes.btn}>
              {r.text}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
