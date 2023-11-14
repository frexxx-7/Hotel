import React, { useEffect, useRef, useState } from 'react'
import classes from './EditProfile.module.scss'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

const EditProfile = () => {
    const { user } = useStateContext()

    const [errors, setErrors] = useState()
    const [userInfo, setUserInfo] = useState({})
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()

    const location = useLocation()

    useEffect(()=>{
        setUserInfo(user)
    },[])
    console.log(userInfo);

    const editProfile = () => {

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
                        <input type="text" className={classes.dataInput} name="Name" placeholder='Имя' value={userInfo.name} />
                        <input type="text" className={classes.dataInput} name="Password" placeholder='Пароль' />
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