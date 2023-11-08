import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ContentAdminPanel.module.scss'
import { faPen, faList, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const MainAdminPanel = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.AdminPanel}>
            <div className={classes.buttonDiv}  onClick={() => navigate('/rooms')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faList} />
                </div>
                <p className={classes.buttonP}>Комнаты</p>
            </div>

            <div className={classes.buttonDiv}  onClick={() => navigate('/news')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faNewspaper} />
                </div>
                <p className={classes.buttonP}>Новости</p>
            </div>
        </div>
    )
}

export default MainAdminPanel