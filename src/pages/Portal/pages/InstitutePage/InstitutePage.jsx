import React from 'react'
import classes from './InstitutePage.module.css'
import { useLocation } from 'react-router-dom'
import Info from '../../../../components/Info/Info'

const InstitutePage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')
  const title = decodeURIComponent(queryParams.get('title'))

  return (
    <div className={classes.institutePage}>
      <Info name={title}>
        <p className={classes.info}>
          id = {id}, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequatur alias explicabo est debitis officia recusandae commodi,
          ipsum quae optio tempora atque illum aliquam quos suscipit eveniet
          sit, quasi voluptatum autem excepturi libero cumque doloribus
          repudiandae hic aperiam. Possimus doloribus accusamus libero maxime
          repudiandae, quos earum. Officiis molestias dolorem, repellendus
          excepturi, dolores a ab aliquam ex impedit necessitatibus aliquid
          nostrum voluptas maxime nesciunt? Nisi autem dolorum reiciendis
          molestias explicabo quod ad consequuntur numquam odio nam in, iure
          nobis assumenda, deleniti, nemo eaque similique quasi quaerat pariatur
          expedita repudiandae distinctio sequi. Odit dolorem omnis quis
          voluptatibus molestias, earum voluptatum quae maiores cumque.
        </p>
      </Info>
    </div>
  )
}

export default InstitutePage
