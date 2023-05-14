import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = (props) => {
  const numberOfColumns = Math.ceil(props.refs.length / 3)

  const columnRefs = Array.from({ length: numberOfColumns }, (v, i) =>
    props.refs.slice(i * 3, i * 3 + 3)
  )

  const { t, i18n } = useTranslation()

  return (
    <footer className={classes.footer}>
      <div className={classes.refsTable}>
        {columnRefs.map((column, index) => (
          <ul className={classes.column} key={index}>
            {column.map((el) => (
              <li className={classes.listItem} key={index}>
                <Link className={classes.ref} key={index} to={el.ref}>
                  {t(el.text)}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={classes.contacts}>
        <div>
          <p>{t(props.contacts.phoneTrans)}</p>
          <p>{props.contacts.phone}</p>
        </div>
        <div>
          <p>{t(props.contacts.emailTrans)}</p>
          <p>{props.contacts.email}</p>
        </div>
        <div>
          <p>{t(props.contacts.websiteTrans)}</p>
          <p>{props.contacts.website}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
