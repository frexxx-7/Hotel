import React from 'react'
import Autorization from '../pages/Autorization/Autorization'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/autorization' element={<Autorization  />} />

        <Route path="*" element={<Navigate to={`/autorization`} />}/>
      </Routes>
  )
}

export default AppRouter