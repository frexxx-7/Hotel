import React from 'react'
import classes from './Room.module.scss'
import { useNavigate } from 'react-router-dom'

const Room = (props) => {

  const roomInfo = props.room

  const navigate = useNavigate()

  return (
    <div className={classes.roomContent}>
      <div className={classes.roomBlock} onClick={() => navigate(`/rooms/${roomInfo.id}`)}>
        <div className={classes.roomContentBlock}>
          {roomInfo.image &&
            <div className={classes.image}>
              <img src={roomInfo.image} alt="image" />
            </div>
          }
          <div className={classes.roomBlockContent}>
            <p className={classes.header}>
              Номер комнаты: {roomInfo.number}
            </p>
            <p className={classes.content}>
              Количество кроватей: {roomInfo.numberOfBeds}
            </p>
            <p className={classes.content}>
              Количество человек: {roomInfo.quantityIsBusy}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room