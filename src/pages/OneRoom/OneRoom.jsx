import React, { useEffect } from 'react'
import classes from './OneRoom.module.scss'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

const OneRoom = ({ roomInfo }) => {
  const { user, token, setUser, setToken } = useStateContext()

  const navigate = useNavigate()

  const checkReservationRoom = () => {

  }

  useEffect(() => {

  }, [])

  const reservationRoom = () => {
    const payload = {
      numberOfBeds: numberOfBedsRef.current.value,
      square: squareRef.current.value,
    }
    axiosCLient.post('/addRoom', payload)
      .then(({ data }) => {
        if (data) {
          navigate(`/rooms/${data.room.id}`)
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
    <div className={classes.roomInfo}>
      {
        roomInfo ?
          <div className={classes.room}>
            <div className={classes.roomContentContainer}>
              <div className={classes.roomContent}>
                {
                  roomInfo.image &&
                  <div className={classes.image}>
                    <img src={roomInfo.image} alt="image" />
                  </div>
                }
                <div className={classes.infoContent}>

                  <div className={classes.number}>
                    <p>Номер комнаты:</p>
                    <p>{roomInfo.number}</p>
                  </div>
                  <div className={classes.numberOfBeds}>
                    <p>Количество кроватей:</p>
                    <p>{roomInfo.numberOfBeds}</p>
                  </div>
                  <div className={classes.numberOfBeds}>
                    <p>Количество кроватей:</p>
                    <p>{roomInfo.numberOfBeds}</p>
                  </div>
                  <div className={classes.quantityIsBusy}>
                    <p>Количество занятых:</p>
                    <p>{roomInfo.quantityIsBusy}</p>
                  </div>
                  <div className={classes.square}>
                    <p>Площадь:</p>
                    <p>{roomInfo.square}</p>
                  </div>
                </div>
              </div>
              {
                token
                  ?
                  <div>
                    <button className={classes.buttonReservation}>Забронировать</button>
                  </div>
                  :
                  ""
              }

            </div>
          </div>
          :
          <div className={classes.loader}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
      }

    </div >
  )
}

export default OneRoom