import React from 'react'
import classes from './Button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className={classes.button}>
        {children}
      </button>
    </div>
  )
}

export default Button
