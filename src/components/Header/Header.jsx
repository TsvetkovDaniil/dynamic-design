import React from 'react'
import classes from './Header.module.css'

const Header = ({ refs, bgColor }) => {
  return (
    <header className={classes.navbar} style={{ backgroundColor: bgColor }}>
      <nav className={classes.navbarInner}>
        <ul className={classes.nav}>
          <a href="/" className={classes.btn}>
            Росдистант
          </a>
          {refs.map((r) => (
            <a key={r.ref} href={r.ref} className={classes.btn}>
              {r.text}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
