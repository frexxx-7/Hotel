import React from 'react'
import classes from './Autorization.module.scss'
import { Link } from 'react-router-dom'

const Autorization = () => {
    return (
        <div className={classes.mainContent}>
            <div className={classes.company}>
                <p className={classes.companyP}>Hotel.com</p>
            </div>
            <div className={classes.autorizationWindow}>

                <div className={classes.window}>
                    <div className={classes.windowContent}>
                        <p>Авторизация</p>
                        <div className={classes.inputDiv}>
                            <input type="text" className={classes.inputAutorization} placeholder='Login' />
                            <input type="text" className={classes.inputAutorization} placeholder='Password' />
                        </div>
                        {/* <div style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}></div> */}
                        <Link
                            to="/registration"
                            className={classes.registrationA}
                        >
                            Регистрация
                        </Link>
                        <button className={classes.autorizationButton}>Авторизация</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Autorization