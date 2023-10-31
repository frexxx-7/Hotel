import React, { useEffect, useState } from 'react'
import classes from './Rooms.module.scss'
import Room from '../../components/Room/Room'
import axiosCLient from '../../axios.client'

const Rooms = () => {
  const [arrayRooms, setArrayRooms] = useState([])

  useEffect(()=>{
    axiosCLient.get('/rooms')
    .then(({data})=>{
      setArrayRooms(data.rooms);
    })
  }, [])
  return (
    <div className={classes.rooms}>
      {
        arrayRooms.map((elem, key)=>{
          return <Room room = {elem} key={key}/>
        })
      }
    </div>
  )
}

export default Rooms