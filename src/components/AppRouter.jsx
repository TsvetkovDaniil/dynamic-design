import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = (props) => {
  return (
    <Routes>
      <>
        {props.routes.map((r) => (
          <Route
            key={r.path}
            exact={r.exact}
            path={r.path}
            element={<r.component />}
          />
        ))}
        <Route key={'*'} path="*" element={<Navigate to={'/about'} />} />
      </>
    </Routes>
  )
}

export default AppRouter
