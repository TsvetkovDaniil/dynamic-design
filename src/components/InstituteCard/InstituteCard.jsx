import React from 'react'
import classes from './InstituteCard.module.css'
import { Link } from 'react-router-dom'

const InstituteCard = (props) => {
  const encodeTitle = encodeURIComponent(props.title)

  return (
    <Link
      to={{
        pathname: '/institute',
        search: `?id=${props.id}&title=${encodeTitle}`,
      }}
      className={classes.card}
    >
      {props.title}
    </Link>
  )
}

export default InstituteCard
