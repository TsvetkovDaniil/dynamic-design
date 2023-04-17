import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  const numberOfColumns = Math.ceil(props.refs.length / 3)

  const columnRefs = Array.from({ length: numberOfColumns }, (v, i) =>
    props.refs.slice(i * 3, i * 3 + 3)
  )

  return (
    <footer className={classes.footer}>
      <div className={classes.refsTable}>
        {columnRefs.map((column, index) => (
          <ul className={classes.column} key={index}>
            {column.map((el) => (
              <li className={classes.listItem} key={index}>
                <Link className={classes.ref} key={index} to={el.ref}>
                  {el.text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={classes.contacts}>
        <div>
          <p>Наш телефон</p>
          <p>{props.contacts.phone}</p>
        </div>
        <div>
          <p>Наша почта</p>
          <p>{props.contacts.email}</p>
        </div>
        <div>
          <p>Наш сайт</p>
          <p>{props.contacts.website}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
