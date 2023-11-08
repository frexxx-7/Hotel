import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosCLient from '../../axios.client'
import OneNews from '../OneNews/OneNews'

const LoadNews = () => {
  const currentUrl = useLocation()
  const [infoNews, setInfoNews] = useState()
  const idNews = currentUrl.pathname.split('/')[currentUrl.pathname.split('/').length - 1];

  const navigate = useNavigate()

  const loadNewsInfo = () => {
    axiosCLient.get(`/news/${idNews}`)
      .then(({ data }) => {
        setInfoNews(data.news);
      })
      .catch(({ response }) => {
        if (response.status == 404) {
          navigate('/news')
        }
      })
  }
  useEffect(() => {
    loadNewsInfo()
  }, [])

  return (
    <div>
      <OneNews newsInfo={infoNews} />
    </div>
  )
}

export default LoadNews