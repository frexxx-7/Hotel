import React from 'react'
import classes from './MyHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

const MyHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.contentHeader}>
        <div className={classes.company}>

          <div className={classes.iconBurger}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={classes.nameCompany}>
            <p className={classes.nameCompanyP}>Hotel.com</p>
          </div>
        </div>

        <div className={classes.profileDiv}>
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