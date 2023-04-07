import React from 'react'
import classes from './Rosdistant.module.css'
import Header from '../../components/Header/Header'

const refs = [
  { ref: '/', text: 'Мое расписание' },
  { ref: '/', text: 'Мои курсы' },
  { ref: '/', text: 'Мои задачи' },
  { ref: '/', text: 'Учебный план' },
]
const bgColor = 'rgb(22, 100, 216)'

const Rosdistant = () => {
  return (
    <div className={classes.rosdistant}>
      <Header refs={refs} bgColor={bgColor} />
    </div>
  )
}

export default Rosdistant
