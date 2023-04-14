import React from 'react'
import classes from './Theme.module.css'
import GradientCard from '../GradientCard/GradientCard'
import { cards } from '../../themes/cards'
import { useTheme } from '../../hooks/useTheme'

const Theme = () => {
  const [theme, setTheme] = useTheme()

  return (
    <div className={classes.theme}>
      {cards.map((c) => (
        <GradientCard
          setTheme={setTheme}
          name={c.name}
          title={c.title}
          color1={c.color1}
          color2={c.color2}
        />
      ))}
    </div>
  )
}

export default Theme
