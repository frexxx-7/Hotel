import React, { useRef, useState } from 'react'
import classes from './Registration.module.scss'
import { useNavigate } from 'react-router-dom';
import axiosCLient from '../../axios.client';
import { useStateContext } from '../../context/ContextProvider';

const Registration = () => {
    const navigate = useNavigate();

    const loginRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const [errors, setErrors] = useState();

    const { setUser, setToken } = useStateContext()

    const registrationClick = (e) => {
        const payload = {
            login: loginRef.current.value,
            password: passwordRef.current.value,
            repeat_password: repeatPasswordRef.current.value
        }
        axiosCLient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422) {
                    setErrors(response.data.errors)
                }
            })
    }

    return (
        <div className={classes.content}>
            <div className={classes.windowRegistration}>
                <div className={classes.windowContent}>
                    <p>Регистрация</p>
                    <div className={classes.inputDiv}>
                        <input ref={loginRef} type="text" className={classes.inputRegistration} name="login" placeholder='Логин' />
                        <input ref={passwordRef} type="text" className={classes.inputRegistration} name="password" placeholder='Пароль' />
                        <input ref={repeatPasswordRef} type="text" className={classes.inputRegistration} placeholder='Повторите пароль' />
                    </div>
                    <p className={classes.error}>{errors}</p>
                    <button className={classes.registrationButton} onClick={registrationClick}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default Registration