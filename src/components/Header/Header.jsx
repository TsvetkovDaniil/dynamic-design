import React, { useContext } from 'react'
import classes from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/button/Button'
import { useTranslation } from 'react-i18next'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import { AuthContext } from '../../context'

const Header = (props) => {
  const navigate = useNavigate()

  const { t, i18n } = useTranslation()

  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
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
        <LangSwitcher className={classes.switcher} />
        <ul className={classes.btnsNav}>
          <Button
            onClick={() => {
              navigate('/theme')
            }}
          >
            {t('changeTheme')}
          </Button>
          <Button onClick={logout}>{t('exit')}</Button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
