import React from 'react'
import classes from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/button/Button'

const Header = (props) => {
  const navigate = useNavigate()

  return (
    <header className={classes.navbar}>
      <nav className={classes.navbarInner}>
        <ul className={classes.refsNav}>
          {props.refs.map((r) => (
            <Link key={r.ref} to={r.ref} className={classes.btn}>
              {r.text}
            </Link>
          ))}
        </ul>
        <ul className={classes.btnsNav}>
          <Button
            onClick={() => {
              navigate('/theme')
            }}
          >
            Изменить тему
          </Button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
