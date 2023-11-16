import React from 'react'
import classes from './ContentAdminPanel.module.scss'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faList, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const ForAllAdminPanel = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.AdminPanel}>
      <div className={classes.buttonDiv} onClick={() => navigate('/main')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <p className={classes.buttonP}>Главная</p>
      </div>

      <div className={classes.buttonDiv} onClick={() => navigate('/rooms')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faList} />
        </div>
        <p className={classes.buttonP}>Комнаты</p>
      </div>

      <div className={classes.buttonDiv} onClick={() => navigate('/news')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faNewspaper} />
        </div>
        <p className={classes.buttonP}>Новости</p>
      </div>
    </div>
  )
}

export default ForAllAdminPanel