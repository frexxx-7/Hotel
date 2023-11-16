import React from 'react'
import classes from './New.module.scss'
import { useNavigate } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

const New = (props) => {

  const newsInfo = props.new
  fontawesome.library.add(far, fas, faHeart);
  const navigate = useNavigate()

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
      </div>

      <div className={classes.likeContainer}>
        <FontAwesomeIcon icon={['far', 'heart']} />
      </div>
    </div>
  )
}
export default New