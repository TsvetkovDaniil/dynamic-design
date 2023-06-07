import React from 'react'
import classes from './Button.module.css'
import { useTranslation } from 'react-i18next'

const Button = ({ children, ...props }) => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <button {...props} className={classes.button}>
        {t(children)}
      </button>
    </div>
  )
}

export default Button
