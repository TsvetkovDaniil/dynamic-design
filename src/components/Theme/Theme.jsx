import React from 'react'
import classes from './Theme.module.css'
import GradientCard from '../GradientCard/GradientCard'
import { cards } from '../../themes/cards'
import { useTheme } from '../../hooks/useTheme'
import { useTranslation } from 'react-i18next'

const Theme = () => {
  const [theme, setTheme] = useTheme()

  const { t, i18n } = useTranslation()

  return (
    <div className={classes.theme}>
      {cards.map((c) => (
        <GradientCard
          setTheme={setTheme}
          name={c.name}
          title={t(c.title)}
          color1={c.color1}
          color2={c.color2}
        />
      ))}
    </div>
  )
}

export default Theme
