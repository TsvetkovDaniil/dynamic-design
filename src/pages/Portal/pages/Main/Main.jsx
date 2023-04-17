import React from 'react'
import classes from './Main.module.css'
import Info from '../../../../components/Info/Info'
import { portalData } from '../../portalData'
import InstituteCard from '../../../../components/InstituteCard/InstituteCard'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  return (
    <Info name={portalData.name}>
      <section className={classes.cardsSection}>
        {portalData.instituteCards.map((card, index) => (
          <div className={classes.instituteCard}>
            <InstituteCard title={card.title} id={index + 1} />
          </div>
        ))}
      </section>
    </Info>
  )
}

export default Main
