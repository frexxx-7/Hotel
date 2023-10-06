import React, { useRef, useState } from 'react'
import classes from './Autorization.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import axiosCLient from '../../axios.client'

const Autorization = () => {
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    const [errors, setErrors] = useState()
    const { setUser, setToken } = useStateContext()

    const autorizationCLick = () => {
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        axiosCLient.post('/signin', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)

            })
            .catch(err => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
    }

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
                            <input ref={emailRef} type="email" className={classes.inputAutorization} placeholder='Почта' />
                            <input ref={passwordRef} type="password" className={classes.inputAutorization} placeholder='Пароль' />
                        </div>
                        {errors &&
                            <div>
                                {Object.keys(errors).map(key => (
                                    <p className={classes.error} key={key}>{errors[key][0]}</p>
                                ))}</div>
                        }
                        <Link
                            to="/signup"
                            className={classes.registrationA}
                        >
                            Регистрация
                        </Link>
                        <button className={classes.autorizationButton} onClick={autorizationCLick}>Авторизация</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Autorization