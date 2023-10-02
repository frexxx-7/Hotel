import React from 'react'
import Autorization from '../pages/Autorization/Autorization'
import { Navigate, Route, Routes } from 'react-router-dom'
import Registration from '../pages/Registration/Registration'
import Main from '../pages/Main/Main'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/signin' element={<Autorization  />} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/main' element={<Main />} />

        <Route path="*" element={<Navigate to={`/signin`} />}/>
      </Routes>
  )
}

export default AppRouter