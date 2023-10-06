import React, { useState } from 'react'
import classes from './MyHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { useStateContext } from '../../../context/ContextProvider'
import { Link, useNavigate } from 'react-router-dom'

const MyHeader = () => {
  const { token, showAside, setShowAside } = useStateContext();
  const navigate = useNavigate();

  const profileCLick = () => {
    if (!token) {
      navigate('/signin')
    } else {
      navigate('/profile')
    }
  }

  return (
    <header className={classes.header}>
      <div className={classes.contentHeader}>
        <div className={classes.company}>

          <div className={classes.iconBurger} onClick={() => {
            setShowAside(!showAside)
          }
          }>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={classes.nameCompany}>
            <Link to={'/main'} className={classes.nameCompanyP} >Hotel.com</Link>
          </div>
        </div>

        <div className={classes.profileDiv} onClick={profileCLick}>
          <div className={classes.profile}>
            <p className={classes.profileP}>Профиль</p>
          </div>
          <div className={classes.iconBurger}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>

      </div>

    </header>
  )
}

export default MyHeader