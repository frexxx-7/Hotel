import React, { useEffect, useState } from 'react'
import classes from './Main.module.scss'
import axios from 'axios'

const Main = () => {

  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = () => {
    axios.get("http://hotel.com").then(response => {
      setUserInfo(response.data)
    })
  }

  return (
    <div>
      {userInfo.map((user, key) =>
        <div key={key}>
          <p>{user.id}</p>
          <p>{user.login}</p>
          <p>{user.password}</p>
        </div>
      )}
    </div>
  )
}

export default Main