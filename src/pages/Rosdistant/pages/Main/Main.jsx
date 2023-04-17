import React from 'react'
import Info from '../../../../components/Info/Info'
import { rsData } from '../../rosdistantData'
import classes from './Main.module.css'

const About = () => {
  return (
    <div>
      <Info name={rsData.name}>
        <section className={classes.infoSection}>
          <h3 className={classes.header}>Информация для студентов</h3>
          <p className={classes.info}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sed,
            vel nobis similique doloribus culpa possimus inventore excepturi?
            Cumque quos ipsam nam maiores voluptas! Omnis nesciunt, odit vitae
            culpa, enim perferendis quam deleniti fugiat laborum, pariatur
            molestiae quae. Deserunt accusantium vero ab blanditiis eum
            reprehenderit ipsam esse minima ducimus alias. Tempore vitae aut
            necessitatibus voluptas eaque nam dignissimos cupiditate nesciunt
            natus illum? Vitae voluptatem repellat dolorem, officia minima
            numquam, nobis esse accusantium eaque amet quis molestias maxime
            alias voluptatum. Odio, ducimus, reprehenderit sapiente id
            consectetur modi repudiandae perspiciatis maiores accusamus sed cum
            quas ut dignissimos iusto? Eius laudantium amet adipisci?
          </p>
        </section>
      </Info>
    </div>
  )
}

export default About
