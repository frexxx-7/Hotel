import React, { useEffect } from 'react'
import classes from './AdminPanel.module.scss'
import { useLocation } from 'react-router-dom';
import MainAdminPanel from './ContentAdminPanel/MainAdminPanel';
import NewsAdminPanel from './ContentAdminPanel/NewsAdminPanel';
import RoomsAdminPanel from './ContentAdminPanel/RoomsAdminPanel';
import OneNewsAdminPanel from './ContentAdminPanel/OneNewsAdminPanel';
import OneRoomAdminPanel from './ContentAdminPanel/OneRoomAdminPanel';

const AdminPanel = () => {
  const location = useLocation()

  const switchPath = (pathname) => {
    switch (pathname) {
      case "/main":
        return <MainAdminPanel />
      case "/profile":
        return "profile"
      case "/news":
        return <NewsAdminPanel />
      case "/rooms":
        return <RoomsAdminPanel />
      case "/" + (pathname.match(/news\/.*/) && pathname.match(/news\/.*/)[0]):
        return <OneNewsAdminPanel idNews={pathname.match(/news\/.*/) && pathname.split('/')[pathname.split('/').length - 1]} />
      case "/" + (pathname.match(/rooms\/.*/) && pathname.match(/rooms\/.*/)[0]):
        return <OneRoomAdminPanel idRoom={pathname.match(/rooms\/.*/) && pathname.split('/')[pathname.split('/').length - 1]} />
      default:
        break;
    }
  }
  return (
    <div className={classes.AdminPanel}>
      {switchPath(location.pathname)
      }
    </div>
  )
}

export default AdminPanel