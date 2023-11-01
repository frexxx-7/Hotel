import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'
import { useStateContext } from '../context/ContextProvider'
import axiosCLient from '../axios.client'

const AppRouter = () => {
  const { token, setUser, adminInfo, setAdminInfo } = useStateContext();

  useEffect(() => {
    axiosCLient.get('/user')
      .then(({ data }) => {
        setUser(data)
      })
    axiosCLient.get('/adminInfo')
      .then(({ data }) => {
        setAdminInfo(data)
      })
  }, [])
  
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