import React, { useEffect, useState } from 'react'
import classes from './Rooms.module.scss'
import Room from '../../components/Room/Room'
import axiosCLient from '../../axios.client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Rooms = () => {
  const [arrayRooms, setArrayRooms] = useState([])
  const [searchText, setSearchText] = useState()
  const [loadRoom, setLoadRoom] = useState()

  useEffect(() => {
    setLoadRoom(true)
    axiosCLient.get('/rooms')
      .then(({ data }) => {
        setArrayRooms(data.rooms.reverse());
        setLoadRoom(false)
      })
  }, [])

  const searchAllRoom = () => {
    const payload = {
      searchText: searchText
    }
    axiosCLient.post('/searchAllRooms', payload)
      .then(({ data }) => {
        setArrayRooms(data.rooms.reverse());
      })
  }

  return (
    <>
      <div className={classes.searchRooms}>
        <input type="search" className={classes.searchInput} placeholder='Поиск комнаты' onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <div className={classes.searchButton} onClick={() => searchAllRoom()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className={classes.rooms}>

        {arrayRooms.length == 0 && loadRoom ?
          <div className={classes.loader}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
          :
          ""
        }
        {
          arrayRooms.length == 0 && !loadRoom ?
            <div style={{display:'flex', alignItems:'center', fontWeight:"bold"}}>Комнат нет</div>
            :
            ""
        }
        {
          arrayRooms.map((elem, key) => {
            return <Room room={elem} key={key} />
          })
        }
      </div>
    </>
  )
}

export default Rooms