import React from 'react'
import classes from './Footer.module.css'

const Footer = (props) => {
  const numberOfColumns = Math.ceil(props.refs.length / 3)

  const columnRefs = Array.from({ length: numberOfColumns }, (v, i) =>
    props.refs.slice(i * 3, i * 3 + 3)
  )

  return (
    <footer className={classes.footer} style={{ backgroundColor: props.color }}>
      <div className={classes.refsTable}>
        {columnRefs.map((column, index) => (
          <ul className={classes.column} key={index}>
            {column.map((el) => (
              <li className={classes.listItem} key={index}>
                <a className={classes.ref} key={index} href={el.ref}>
                  {el.text}
                </a>
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
