import React, { useEffect, useRef, useState } from 'react'
import classes from './EditProfile.module.scss'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import axiosCLient from '../../axios.client'

const EditProfile = () => {
    const [errors, setErrors] = useState()
    const [userInfo, setUserInfo] = useState({})

    const nameRef = useRef()
    const emailRef = useRef()

    const location = useLocation()

    useEffect(() => {
        if (location.pathname.split('/')[1] == "editProfile") {
            axiosCLient.get(`/loadInfoUser/${location.pathname.split('/')[2]}`)
                .then(({ data }) => {
                    if (data) {
                        setUserInfo(data.user);
                        nameRef.current.value = data.user.name
                        emailRef.current.value = data.user.email
                        setSelectedImage(data.user.image)
                    }
                })
                .catch(({ response }) => {
                    console.log(response);
                })
        }
    }, [])

    const editProfile = () => {
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
        }
        axiosCLient.post(`/editProfile/${userInfo.id}`, payload)
            .then(({ data }) => {
                if (data) {
                    console.log(data);
                    // if(data.user == 1)
                    //  navigate(`/profile`)
                }
            })
            .catch(err => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
    }

    return (
        <div className={classes.addNews}>
            <div className={classes.addNewsWindow}>
                <div className={classes.addNewsContent}>

                    <div className={classes.header}>
                        <h1>
                            Редактировать профиль
                        </h1>
                    </div>

                    <div className={classes.inputs}>
                        <input ref={emailRef} type="text" className={classes.dataInput} name="Email" placeholder='Email' />
                        <input ref={nameRef} type="text" className={classes.dataInput} name="Name" placeholder='Имя' />
                    </div>
                    {errors &&
                        <div>
                            {Object.keys(errors).map(key => (
                                <p className={classes.error} key={key}>{errors[key][0]}</p>
                            ))}</div>
                    }
                </div>
                <div className={classes.addButtonDIv}>
                    <button onClick={editProfile}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile