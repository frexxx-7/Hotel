import React from 'react'
import classes from './Room.module.scss'

const Room = () => {
  return (
    <div className={classes.roomContent}>
            <div className={classes.roomBlock}>
                <div className={classes.roomBlockContent}>
                    <p className={classes.header}>
                    </p>
                    <p className={classes.content}>
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Room