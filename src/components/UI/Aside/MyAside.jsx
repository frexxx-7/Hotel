import React, { useState } from 'react'
import classes from './MyAside.module.scss'
import { useStateContext } from '../../../context/ContextProvider'
import { faHouse, faList, faNewspaper, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const MyAside = () => {
    const navigate = useNavigate()
    const {setShowAside} = useStateContext()

    return (
        <aside className={classes.MyAside}>
            <div className={classes.headerAside}>
                <p>Hotel.com</p>
                <div className={classes.cancelDiv} onClick={()=>setShowAside(false)}>
                    <FontAwesomeIcon icon={faXmark} className={classes.cancel}/>
                </div>
            </div>
            <div className={classes.goToDiv}>
                <div className={classes.goTo} onClick={() => navigate('/main')}>
                    <FontAwesomeIcon icon={faHouse} />
                    <p>На главную</p>
                </div>
            </div>

            <div className={classes.goToDiv}>
                <div className={classes.goTo} onClick={() => navigate('/rooms')}>
                    <FontAwesomeIcon icon={faList} />
                    <p>Комнаты</p>
                </div>
            </div>

            <div className={classes.goToDiv}>
                <div className={classes.goTo} onClick={() => navigate('/news')}>
                    <FontAwesomeIcon icon={faNewspaper} />
                    <p>Новости</p>
                </div>
            </div>
        </aside>
    )
}

export default MyAside