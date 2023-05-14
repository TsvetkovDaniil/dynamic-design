import React from 'react'
import classes from './Main.module.css'
import Info from '../../../../components/Info/Info'
import { portalData } from '../../portalData'
import InstituteCard from '../../../../components/InstituteCard/InstituteCard'
import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t, i18n } = useTranslation()

  return (
    <Info name={portalData.name}>
      <section className={classes.cardsSection}>
        {portalData.instituteCards.map((card, index) => (
          <div className={classes.instituteCard}>
            <InstituteCard title={t(card.title)} id={index + 1} />
          </div>
        ))}
      </section>
    </Info>
  )
}

export default Main
