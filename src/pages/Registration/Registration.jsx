import React, { useRef, useState } from 'react'
import classes from './Registration.module.scss'
import { useNavigate } from 'react-router-dom';
import axiosCLient from '../../axios.client';
import { useStateContext } from '../../context/ContextProvider';

const Registration = () => {
    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();
    const [errors, setErrors] = useState(null);

    const { setUser, setToken } = useStateContext()

    const registrationClick = (e) => {
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: repeatPasswordRef.current.value
        }
        axiosCLient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
                navigate('/main')
            })
            .catch(err => {
                const response = err.response
                if (response && response.status === 422) {
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
                        <input ref={nameRef} type="text" className={classes.inputRegistration} name="name" placeholder='Имя' />
                        <input ref={emailRef} type="email" className={classes.inputRegistration} name="email" placeholder='Почта' />
                        <input ref={passwordRef} type="text" className={classes.inputRegistration} name="password" placeholder='Пароль' />
                        <input ref={repeatPasswordRef} type="text" className={classes.inputRegistration} placeholder='Повторите пароль' />
                    </div>
                    {errors &&
                        <div>
                            {Object.keys(errors).map(key => (
                                <p className={classes.error} key={key}>{errors[key][0]}</p>
                            ))}</div>
                    }
                    <button className={classes.registrationButton} onClick={registrationClick}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default Registration