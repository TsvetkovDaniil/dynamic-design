import React from 'react'
import classes from './GradientCard.module.css'

const GradientCard = (props) => {
  const handleClick = () => {
    props.setTheme(props.name)
  }

  return (
    <div className={classes.card} tabIndex="0" onClick={handleClick}>
      <div
        className={classes.gradient}
        style={{
          backgroundImage: `linear-gradient(45deg, ${props.color1} 50%, ${props.color2} 50%)`,
        }}
      ></div>
      <p className={classes.themeName}>{props.title}</p>
    </div>
  )
}

export default GradientCard
