import React, { useEffect, useState } from 'react'
import classes from './Rooms.module.scss'
import Room from '../../components/Room/Room'
import axiosCLient from '../../axios.client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Rooms = () => {
  const [arrayRooms, setArrayRooms] = useState([])
  const [searchText, setSearchText] = useState()

  useEffect(() => {
    axiosCLient.get('/rooms')
      .then(({ data }) => {
        setArrayRooms(data.rooms.reverse());
      })
  }, [])

  const searchAllRoom = () => {
    const payload = {
      searchText: searchText
    }
    axiosCLient.post('/searchAllRooms', payload)
      .then(({ data }) => {
        console.log(data);
        setArrayRooms(data.rooms.reverse());
      })
  }

  return (
    <>
      <div className={classes.searchRooms}>
        <input type="search" className={classes.searchInput} placeholder='Поиск комнаты' onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <div className={classes.searchButton} onClick={()=>searchAllRoom()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className={classes.rooms}>

        {arrayRooms.length == 0 ?
          <div className={classes.loader}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
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