import React from 'react'
import classes from './Registration.module.scss'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    const registrationClick = (e) => {

        fetch("http://hotel.com", {
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({ action: 1 })
        })
        .then(response => response.text())
        .then(response => {
            console.log(response)
        })


        navigate('/main')
    }

    return (
        <div className={classes.content}>
            <div className={classes.windowRegistration}>
                <div className={classes.windowContent}>
                    <p>Регистрация</p>
                    <div className={classes.inputDiv}>
                        <input type="text" className={classes.inputRegistration} placeholder='Логин' />
                        <input type="text" className={classes.inputRegistration} placeholder='Пароль' />
                        <input type="text" className={classes.inputRegistration} placeholder='Повторите пароль' />
                    </div>
                    <button className={classes.registrationButton} onClick={registrationClick}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default Registration