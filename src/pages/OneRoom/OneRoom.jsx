import React from 'react'
import classes from './OneRoom.module.scss'

const OneRoom = ({ roomInfo }) => {
  return (
    <div className={classes.roomInfo}>
      {
        roomInfo ?
          <div className={classes.room}>
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