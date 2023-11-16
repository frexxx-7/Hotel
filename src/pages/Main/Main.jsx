import React, { useEffect, useState } from 'react'
import classes from './Main.module.scss'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faDumbbell, faMagnifyingGlass, faNewspaper, faScissors, faUtensils } from '@fortawesome/free-solid-svg-icons'
import New from '../../components/New/New'
import Room from '../../components/Room/Room'
import axiosCLient from '../../axios.client'
import { useNavigate } from 'react-router-dom'

const Main = () => {

  const [mainInfo, setMainInfo] = useState([])
  const [searchText, setSearchText] = useState()
  const [onlyRooms, setOnlyRooms] = useState([])
  const [loadRoom, setLoadRoom] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    axiosCLient.get('/main')
      .then(({ data }) => {
        setMainInfo(data);
      })
  }, [])

  useEffect(() => {
    const payload = {
      searchText: searchText
    }
    axiosCLient.post('/searchRooms', payload)
      .then(({ data }) => {
        setLoadRoom(false)
        setOnlyRooms(data);
      })
  }, [searchText])

  return (
    <div className={classes.mainContent}>
      <div className={classes.bgImage}>
        <div className={classes.mainBgImage}>
          <div className={classes.mainInfo}>
            <h2 className={classes.mainInfoH2}>Гостиница</h2>
            <div className={classes.mainSearch}>
              <input type="search" className={classes.searchInput} placeholder='Поиск комнаты' onChange={(e) => {
                setSearchText(e.target.value)
                setLoadRoom(true)
              }} />
              <div className={classes.searchButton}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.welcome}>
        <h3>Добро пожаловать в гостиницу г.Молодечно</h3>
      </div>

      <div className={classes.blockRooms}>
        <div className={classes.blockRoomsContent}>
          <h3 className={classes.roomsH3}>Комнаты</h3>
          <div className={classes.roomsPosts}>
            {mainInfo.length == 0 || loadRoom ?
              <div className={classes.loader}>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              </div>
              :
              ""
            }
            {
              onlyRooms
                ?
                !loadRoom && onlyRooms.rooms &&
                Object.values(onlyRooms.rooms).map((elem, key) => {
                  return <Room room={elem} key={key} />
                })
                :
                mainInfo && mainInfo.rooms &&
                Object.values(mainInfo.rooms).map((elem, key) => {
                  return <Room room={elem} key={key} />
                })
            }
          </div>
        </div>
      </div>

      {searchText

        ?
        ""
        :
        <>


          <div className={classes.hotelInfo}>
            <div className={classes.hotelInfoContent}>
              <div className={classes.oneBlockInfo}>
                <FontAwesomeIcon icon={faNewspaper} onClick={() => navigate('/news')} />
                <p className={classes.oneBlockInfoTitle}>НОВОСТИ</p>
              </div>

              <div className={classes.oneBlockInfo}>
                <FontAwesomeIcon icon={faBed} onClick={() => navigate('/rooms')} />
                <p className={classes.oneBlockInfoTitle} >КОМНАТЫ</p>
              </div>

              <div className={classes.oneBlockInfo}>
                <FontAwesomeIcon icon={faDumbbell} onClick={() => navigate('/gym')} />
                <p className={classes.oneBlockInfoTitle}>СПОРТЗАЛ</p>
              </div>
            </div>
          </div>

          <div className={classes.blockNews}>
            <div className={classes.blockNewsContent}>
              <h3 className={classes.newsH3}>Новости</h3>
              <div className={classes.newsPosts}>
                {mainInfo.length == 0 ?
                  <div className={classes.loader}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                  </div>
                  :
                  ""
                }
                {mainInfo && mainInfo.news &&
                  Object.values(mainInfo.news).reverse().map((elem, key) => {
                    return <New new={elem} key={key} />
                  })
                }
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Main