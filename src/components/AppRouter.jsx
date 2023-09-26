import React from 'react'
import Autorization from '../pages/Autorization/Autorization'
import { Navigate, Route, Routes } from 'react-router-dom'
import Registration from '../pages/Registration/Registration'
import Main from '../pages/Main/Main'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/autorization' element={<Autorization  />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/main' element={<Main />} />

        <Route path="*" element={<Navigate to={`/autorization`} />}/>
      </Routes>
  )
}

export default AppRouter