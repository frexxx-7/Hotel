import React, { useState } from 'react'
import classes from './Registration.module.scss'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({})

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const changeUser = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser(values => ({ ...values, [name]: value }))
    }

    async function postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                // "Content-Type": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return await response
    }

    const registrationClick = (e) => {

        // fetch("http://hotel.com", {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: JSON.stringify({ action: 1 })
        // })
        // .then(response => response.text())
        // .then(response => {
        //     console.log(response)
        // })
        postData("http://hotel.com", { ...user }).then((response) => {
            console.log(response.data);
        })

        // navigate('/main')
    }

    return (
        <div className={classes.content}>
            <div className={classes.windowRegistration}>
                <div className={classes.windowContent}>
                    <p>Регистрация</p>
                    <div className={classes.inputDiv}>
                        <input type="text" id="loginInput" className={classes.inputRegistration} name="login" placeholder='Логин' onChange={changeUser} />
                        <input type="text" id="passwordInput" className={classes.inputRegistration} name="password" placeholder='Пароль' onChange={changeUser} />
                        <input type="text" className={classes.inputRegistration} placeholder='Повторите пароль' />
                    </div>
                    <button className={classes.registrationButton} onClick={registrationClick}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default Registration