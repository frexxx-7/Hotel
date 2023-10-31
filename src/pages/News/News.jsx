import React, { useEffect, useState } from 'react'
import classes from './News.module.scss'
import axiosCLient from '../../axios.client'
import New from '../../components/New/New'

const News = () => {

  const [arrayNews, setArrayNews] = useState([])

  useEffect(()=>{
    axiosCLient.get('/news')
    .then(({data})=>{
      setArrayNews(data.news);
    })
  }, [])

  return (
    <div className={classes.news}>
      {
        arrayNews.map((elem, key)=>{
          return <New new = {elem} key={key}/>
        })
      }
    </div>
  )
}

export default News