import React from 'react'
import Autorization from '../pages/Autorization/Autorization'
import { Navigate, Route, Routes } from 'react-router-dom'
import Registration from '../pages/Registration/Registration'
import Main from '../pages/Main/Main'
import { privateRoutes, publicRoutes } from '../router/routes'
import { useStateContext } from '../context/ContextProvider'

const AppRouter = () => {
  const { token } = useStateContext();

  return (
    token ?
      <Routes>
        {privateRoutes.map((route, index) =>
          <Route
            path={route.path}
            element={<route.component />}
            key={index}
          />
        )}
        <Route path="*" element={<Navigate to={`/main`} />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map((route, index) =>
          <Route
            path={route.path}
            element={<route.component />}
            key={index}
          />
        )}
        <Route path="*" element={<Navigate to={`/main`} />} />
      </Routes>
  )
}

export default AppRouter