import React, { useState } from 'react'
import classes from './New.module.scss'
import { useNavigate } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import axiosCLient from '../../axios.client'
import { useStateContext } from '../../context/ContextProvider'
import { useEffect } from 'react'

const New = (props) => {
  const { user, token, setUser, setToken } = useStateContext()

  const newsInfo = props.new
  fontawesome.library.add(far, fas, faHeart);
  const navigate = useNavigate()
  const [errors, setErrors] = useState()
  const [youLike, setYouLike] = useState()

  const loadInfoYouLike = () => {
    const payload = {
      idUser: user.id,
      idNews: newsInfo.id,
    }
    axiosCLient.post(`/checkLike`, payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          if (data.like.idUser == user.id) {
            setYouLike(true)
          }
        }
      })
      .catch(err => {
        const response = err.response
        console.log(response);
        setErrors(response)
      })
  }

  const deleteLike = () => {
    const payload = {
      idUser: user.id,
      idNews: newsInfo.id,
    }
    axiosCLient.post(`/deleteLike`, payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          if (data) {
            setYouLike(false)
          }
        }
      })
      .catch(err => {
        const response = err.response
        console.log(response);
        setErrors(response.data.errors)
      })
  }

  console.log(youLike);
  useEffect(() => {
    if (user.id) {
      console.log(user);
      loadInfoYouLike()
    }
  }, [user])

  const like = () => {
    const payload = {
      idUser: user.id,
      idNews: newsInfo.id,
    }
    axiosCLient.post(`/like`, payload)
      .then(({ data }) => {
        if (data) {
          if (data.like.idUser == user.id) {
            console.log(data);
            setYouLike(true)
          }
        }
      })
      .catch(err => {
        const response = err.response
        console.log(response);
        setErrors(response.data.errors)
      })
  }

  return (
    <div className={classes.newsContent}>
      <div className={classes.newsBlock}>
        <div className={classes.newsContentBlock}>
          {
            newsInfo.image &&
            <div className={classes.image}>
              <img src={newsInfo.image} alt="image" />
            </div>

          }
          <div className={classes.newBlockContent}>
            <p className={classes.header} onClick={() => navigate(`/news/${newsInfo.id}`)}>
              {newsInfo.title}
            </p>
            <p className={classes.content}>
              {newsInfo.content}
            </p>
          </div>
        </div>
        <div className={classes.likeContainer} >
          {
            youLike
              ?
              <FontAwesomeIcon icon={['fas', 'heart']} onClick={deleteLike} />
              :
              <FontAwesomeIcon icon={['far', 'heart']} onClick={like} />
          }
        </div>
      </div>
    </div>
  )
}
export default New