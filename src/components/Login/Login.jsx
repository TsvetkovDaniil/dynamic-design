import React, { useContext, useState } from 'react'
import classes from './Login.module.css'
import Button from '../../components/UI/button/Button'
import { useTranslation } from 'react-i18next'
import { AuthContext } from '../../context'
import LangSwitcher from '../LangSwitcher/LangSwitcher'

const Login = (props) => {
  const { t, i18n } = useTranslation()

  const { isAuth, setIsAuth } = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/)) {
      setErrorMessage('errorMessage')
      return
    }

    setUsername('')
    setPassword('')
    setErrorMessage('')

    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className={classes.login}>
      <LangSwitcher />
      <h1 className={classes.header}>
        {t('login')} {t(props.title)}
      </h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type='text'
          required
          onChange={handleUsernameChange}
          placeholder={t('enterLogin')}
        />
        <input
          className={classes.input}
          type='password'
          required
          onChange={handlePasswordChange}
          placeholder={t('enterPassword')}
        />
        {errorMessage && <p>{t(errorMessage)}</p>}
        <Button>enter</Button>
      </form>
    </div>
  )
}

export default Login
