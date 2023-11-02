import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { adminRoutes, privateRoutes, publicRoutes } from '../router/routes'
import { useStateContext } from '../context/ContextProvider'
import axiosCLient from '../axios.client'

const AppRouter = () => {
  const { token, setUser, adminInfo, setAdminInfo, user } = useStateContext();

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
      adminInfo && user &&
        adminInfo.username == user.name
        ?
        adminInfo.email == user.email
          ?
          <Routes>
            {privateRoutes.map((route, index) =>
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              />
            )}
            {adminRoutes.map((route, index) =>
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