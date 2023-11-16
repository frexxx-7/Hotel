import React, { useEffect, useRef, useState } from 'react'
import axiosCLient from '../../axios.client'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import classes from './Reservation.module.scss'

const ReservationRoom = () => {
  const { user, token, setUser, setToken } = useStateContext()

  const [errors, setErrors] = useState()
  const [price, setPrice] = useState()
  const [infoRoom, setInfoRoom] = useState()

  const arrivalDateRef = useRef()
  const departureDateRef = useRef()

  const navigate = useNavigate()
  const location = useLocation()

  const idRoom = location.pathname.split('/')[location.pathname.split('/').length - 1];

  useEffect(() => {
    axiosCLient.get(`/rooms/${idRoom}`)
      .then(({ data }) => {
        setInfoRoom(data.room);
      })
      .catch(({ response }) => {
        if (response.status == 404) {
          navigate('/rooms')
        }
      })
  }, [])

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
  function convertMiliseconds(miliseconds, format) {
    var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

    total_seconds = parseInt(Math.floor(miliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));

    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);

    switch (format) {
      case 's':
        return total_seconds;
      case 'm':
        return total_minutes;
      case 'h':
        return total_hours;
      case 'd':
        return days;
      default:
        return { d: days, h: hours, m: minutes, s: seconds };
    }
  };

  const calculateTheCost = () => {
    if (infoRoom) {
      const countDay = convertMiliseconds(new Date(Math.abs(new Date(departureDateRef.current.value) - new Date(arrivalDateRef.current.value))), "d")
      setPrice(countDay * infoRoom.price)
    }
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
          <button onClick={calculateTheCost} style={{ marginRight: "20px" }}>Рассчитать стоимость</button>
          <button onClick={reservationRoom}>Забронировать</button>
        </div>
        {
          price &&
          <div style={{fontWeight: "bold"}}>
            <p>Цена комнаты в день: {infoRoom.price}</p>
            <p>Вся сумма: {price}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default ReservationRoom