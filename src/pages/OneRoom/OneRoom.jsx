import React, { useEffect, useState } from 'react'
import classes from './OneRoom.module.scss'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import ModalWindow from '../../components/UI/ModalWindow/ModalWindow'
import axiosCLient from '../../axios.client'

const OneRoom = ({ roomInfo }) => {
  const { user, token, setUser, setToken } = useStateContext()

  const [showModal, setShowModal] = useState()
  const [statusReservation, setStatusReservation] = useState("")
  const [idUserReservation, setIdUserReservation] = useState()
  console.log(idUserReservation);
  const navigate = useNavigate()

  const checkReservationRoom = () => {
    const payload = {
      idRoom: roomInfo.id,
    }
    axiosCLient.post('/loadInfoReservation', payload)
      .then(({ data }) => {
        if (data) {
          setStatusReservation(data.reservation[data.reservation.length - 1].name);
          setIdUserReservation(data.reservation[data.reservation.length - 1].idUser)
        }
      })
      .catch(err => {
        const response = err.response
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  useEffect(() => {
    roomInfo &&
      checkReservationRoom()
  }, [roomInfo])

  const reservationRoom = () => {
    const payload = {
      idUser: user.id,
      idRoom: roomInfo.id,
      idStatus: 1
    }
    axiosCLient.post('/reservationRoom', payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          setShowModal(true)
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
      <ModalWindow children={"Комната забронирована"} visible={showModal} setVisible={setShowModal} />
      {
        roomInfo ?
          <div className={classes.room}>
            {
              statusReservation != "Свободна"
                ?
                <h2 className={classes.notification}>Комната {statusReservation.toLowerCase()} {statusReservation == "Забронирована" && idUserReservation == user.id ? "вами" : ""}</h2>
                :
                ""
            }
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
                token && statusReservation != "Забронирована"
                  ?
                  <div>
                    <button className={classes.buttonReservation} onClick={() => reservationRoom()}>Забронировать</button>
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