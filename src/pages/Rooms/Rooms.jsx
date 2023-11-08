import React, { useEffect, useState } from 'react'
import classes from './Rooms.module.scss'
import Room from '../../components/Room/Room'
import axiosCLient from '../../axios.client'

const Rooms = () => {
  const [arrayRooms, setArrayRooms] = useState([])

  useEffect(() => {
    axiosCLient.get('/rooms')
      .then(({ data }) => {
        setArrayRooms(data.rooms);
      })
  }, [])
  return (
    <div className={classes.rooms}>
      {arrayRooms.length == 0 ?
        <div className={classes.loader}>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        :
        ""
      }
      {
        arrayRooms.reverse().map((elem, key) => {
          return <Room room={elem} key={key} />
        })
      }
    </div>
  )
}

export default Rooms