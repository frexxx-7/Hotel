import { faHouse, faList, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './ContentAdminPanel.module.scss'
import { useNavigate } from 'react-router-dom'

const OneNewsAdminPanel = ({ idNews }) => {

    const navigate = useNavigate()

    return (
        <div className={classes.AdminPanel}>
            <div className={classes.buttonDiv} onClick={() => navigate('/rooms')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faList} />
                </div>
                <p className={classes.buttonP}>Комнаты</p>
            </div>

            <div className={classes.buttonDiv} onClick={() => navigate('/main')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <p className={classes.buttonP}>Главная</p>
            </div>

            <div className={classes.buttonDiv} onClick={() => navigate(`/editNews/${idNews}`)}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <p className={classes.buttonP}>Редактировать</p>
            </div>

        </div>
    )
}

export default OneNewsAdminPanel