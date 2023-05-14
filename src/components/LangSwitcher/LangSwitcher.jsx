import React from 'react'
import classes from './LangSwitcher.module.css'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  const handleCheckboxChange = (event) => {
    const lang = event.target.checked ? 'en' : 'ru'
    changeLang(lang)
  }

  return (
    <div className={classes.langSwitcher}>
      <span className={classes.ru}>RU</span>
      <input
        type='checkbox'
        className={classes.check}
        onChange={handleCheckboxChange}
      />
      <span className={classes.en}>EN</span>
    </div>
  )
}

export default LangSwitcher
