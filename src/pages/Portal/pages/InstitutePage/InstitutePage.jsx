import React from 'react'
import classes from './InstitutePage.module.css'
import { useLocation } from 'react-router-dom'

const InstitutePage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')
  const title = decodeURIComponent(queryParams.get('title'))

  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default InstitutePage
