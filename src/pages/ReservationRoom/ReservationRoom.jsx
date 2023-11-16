import React, { useRef, useState } from 'react'
import axiosCLient from '../../axios.client'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import classes from './Reservation.module.scss'

const ReservationRoom = () => {
    const { user, token, setUser, setToken } = useStateContext()

    const [errors, setErrors] = useState()

    const arrivalDateRef = useRef()
    const departureDateRef = useRef()

    const navigate = useNavigate()
    const location = useLocation()

    const idRoom = location.pathname.split('/')[location.pathname.split('/').length - 1];

    const reservationRoom = () => {
        const payload = {
            idUser: user.id,
            idRoom: +idRoom,
            idStatus: 1,
            arrivalDate: arrivalDateRef.current.value,
            departureDate: departureDateRef.current.value
        }
        axiosCLient.post('/reservationRoom', payload)
            .then(({ data }) => {
                if (data) {
                    console.log(data);
                    navigate(`/rooms/${data.idRoom}`)
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
        <div className={classes.reservationRoom}>
            <div className={classes.reservationRoomWindow}>
                <div className={classes.reservationRoomContent}>

                    <div className={classes.header}>
                        <h1>
                            Забронировать комнату
                        </h1>
                    </div>

                    <div className={classes.inputs}>
                        <div className={classes.inputContainer}><p>Дата заезда:</p><input ref={arrivalDateRef} type="date" className={classes.dataInput} name="Email" placeholder='Email' /></div>
                        <div className={classes.inputContainer}><p>Дата выезда:</p><input ref={departureDateRef} type="date" className={classes.dataInput} name="departureDate" placeholder='Дата выезда' /></div>
                    </div>
                    {errors &&
                        <div>
                            {Object.keys(errors).map(key => (
                                <p className={classes.error} key={key}>{errors[key][0]}</p>
                            ))}</div>
                    }
                </div>
                <div className={classes.addButtonDIv}>
                    <button onClick={reservationRoom}>Забронировать</button>
                </div>
            </div>
        </div>
    )
}

export default ReservationRoom