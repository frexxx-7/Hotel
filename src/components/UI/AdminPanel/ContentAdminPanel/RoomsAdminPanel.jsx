import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './ContentAdminPanel.module.scss'
import { useNavigate } from 'react-router-dom'
import { faHouse, faNewspaper, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'

const RoomsAdminPanel = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.AdminPanel}>
            <div className={classes.buttonDiv}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <p className={classes.buttonP}>Изменить шрифт</p>
            </div>


            <div className={classes.buttonDiv} onClick={() => navigate('/main')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <p className={classes.buttonP}>Главная</p>
            </div>

            <div className={classes.buttonDiv}  onClick={() => navigate('/news')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faNewspaper} />
                </div>
                <p className={classes.buttonP}>Новости</p>
            </div>

            <div className={classes.buttonDiv} onClick={() => navigate('/addRooms')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <p className={classes.buttonP}>Добавить</p>
            </div>

        </div>
    )
}

export default RoomsAdminPanel