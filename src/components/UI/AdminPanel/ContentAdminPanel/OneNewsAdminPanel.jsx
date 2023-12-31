import { faHouse, faList, faNewspaper, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './ContentAdminPanel.module.scss'
import { useNavigate } from 'react-router-dom'
import axiosCLient from '../../../../axios.client'

const OneNewsAdminPanel = ({ idNews }) => {

    const navigate = useNavigate()

    const deleteNews = () => {
        axiosCLient.get(`/deleteNews/${idNews}`)
            .then(({ data }) => {
                if (data)
                    navigate('/news')
            })
            .catch(({ response }) => {
                if (response.status == 404) {
                    alert("Ошибка")
                }
            })
    }

    return (
        <div className={classes.AdminPanel}>
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

            <div className={classes.buttonDiv} onClick={() => navigate('/main')}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <p className={classes.buttonP}>Главная</p>
            </div>

            <div className={classes.buttonDiv} onClick={() => deleteNews()}>
                <div className={classes.iconDiv}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
                <p className={classes.buttonP}>Удалить</p>
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