import React, { useEffect, useState } from 'react'
import OneRoom from '../OneRoom/OneRoom';
import axiosCLient from '../../axios.client'
import { useLocation, useNavigate } from 'react-router-dom';

const LoadRoom = () => {
  const currentUrl = useLocation()
  const [infoRoom, setInfoRoom] = useState()
  const idNews = currentUrl.pathname.split('/')[currentUrl.pathname.split('/').length - 1];

  const navigate = useNavigate()

  const loadRoomInfo = () => {
    axiosCLient.get(`/rooms/${idNews}`)
      .then(({ data }) => {
        setInfoRoom(data.room);
      })
      .catch(({ response })=>{
        if (response.status == 404) {
          navigate('/rooms')
        }
      })
  }
  useEffect(() => {
    loadRoomInfo()
  }, [])

  return (
    <div>
      <OneRoom roomInfo={infoRoom} />
    </div>
  )
}

export default LoadRoom