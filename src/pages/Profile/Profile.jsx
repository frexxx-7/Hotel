import React, { useEffect } from 'react'
import classes from './Profile.module.scss'
import { useStateContext } from '../../context/ContextProvider'
import axiosCLient from '../../axios.client'

const Profile = () => {
  const { user } = useStateContext()

  return (
    <div className={classes.content}>
      <div className={classes.profileInfoContent}>
        <div className={classes.profileInfo}>
          <div className={classes.info}>
            <div className={classes.nameDiv}>
              <p className={classes.name}>Имя:</p>
              <p className={classes.name}>{user.name}</p>
            </div>
            <div className={classes.emailDiv}>
              <p className={classes.email}>Почта</p>
              <p className={classes.email}>{user.email}</p>
            </div>
          </div>
        </div>

      </div>
      <div className={classes.roomsContent}>
        <div className={classes.rooms}>
          <h3 className={classes.roomsH3}>Команты:</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile