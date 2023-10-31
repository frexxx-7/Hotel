import React from 'react'
import classes from './Room.module.scss'

const Room = (props) => {

  console.log(props);
  const roomInfo = props.room

  return (
    <div className={classes.roomContent}>
            <div className={classes.roomBlock}>
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
  )
}

export default Room