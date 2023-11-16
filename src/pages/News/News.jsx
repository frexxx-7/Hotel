import React, { useEffect, useState } from 'react'
import classes from './News.module.scss'
import axiosCLient from '../../axios.client'
import New from '../../components/New/New'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const News = () => {

  const [arrayNews, setArrayNews] = useState([])
  const [searchText, setSearchText] = useState()
  const [loadNews, setLoadNews] = useState()

  useEffect(() => {
    setLoadNews(true)
    axiosCLient.get('/news')
      .then(({ data }) => {
        setArrayNews(data.news.reverse());
        setLoadNews(false)
      })
  }, [])

  const searchAllNews = () => {
    const payload = {
      searchText: searchText
    }
    axiosCLient.post('/searchAllNews', payload)
      .then(({ data }) => {
        console.log(data);
        setArrayNews(data.news.reverse());
      })
  }

  return (
    <>
      <div className={classes.searchNews}>
        <input type="search" className={classes.searchInput} placeholder='Поиск новости' onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <div className={classes.searchButton} onClick={() => searchAllNews()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className={classes.news}>
        {(arrayNews.length == 0 && loadNews) ?
          <div className={classes.loader}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
          :
          ""
        }
        {
          arrayNews.length == 0 && !loadNews ?
            <div style={{display:'flex', alignItems:'center', fontWeight:"bold"}}>Новостей нет</div>
            :
            ""
        }
        {
          arrayNews.map((elem, key) => {
            return <New new={elem} key={key} />
          })
        }
      </div>
    </>
  )
}

export default News