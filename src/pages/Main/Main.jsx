import React, { useEffect, useState } from 'react'
import classes from './Main.module.scss'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import New from '../../components/New/New'

const Main = () => {

  return (
    <div className={classes.mainContent}>
      <div className={classes.bgImage}>
        <div className={classes.mainBgImage}>
          <div className={classes.mainInfo}>
            <h2 className={classes.mainInfoH2}>Гостиница</h2>
            <div className={classes.mainSearch}>
              <input type="search" className={classes.searchInput} placeholder='Поиск комнаты'>
              </input>
              <div className={classes.searchButton}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.blockNews}>
        <div className={classes.blockNewsContent}>
          <h3 className={classes.newsH3}>Новости</h3>
          <div className={classes.newsPosts}>
            <New/>
            <New/>
            <New/>
            <New/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main