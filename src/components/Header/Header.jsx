import React from 'react'
import classes from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/button/Button'
import { useTranslation } from 'react-i18next'
import LangSwitcher from '../LangSwitcher/LangSwitcher'

const Header = (props) => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  return (
    <header className={classes.navbar}>
      <nav className={classes.navbarInner}>
        <ul className={classes.refsNav}>
          {props.refs.map((r) => (
            <Link key={r.ref} to={r.ref} className={classes.ref}>
              {t(r.text)}
            </Link>
          ))}
        </ul>
        <ul className={classes.btnsNav}>
          <Button
            className={classes.btn}
            onClick={() => {
              navigate('/theme')
            }}
          >
            {t('changeTheme')}
          </Button>
          <LangSwitcher className={classes.btn} />
        </ul>
      </nav>
    </header>
  )
}

export default Header
