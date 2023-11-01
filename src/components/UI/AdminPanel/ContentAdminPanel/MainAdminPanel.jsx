import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ContentAdminPanel.module.scss'
import { faPen, faList } from '@fortawesome/free-solid-svg-icons'

const MainAdminPanel = () => {
    return (
        <div className={classes.mainAdminPanel}>
            <div className={classes.editFontDiv}>
                <div className={classes.edtIcon}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <p className={classes.editFontP}>Изменить шрифт</p>
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
        </div>
    )
}

export default MainAdminPanel