import React, { useEffect } from 'react'
import classes from './AdminPanel.module.scss'
import { useLocation } from 'react-router-dom';
import MainAdminPanel from './ContentAdminPanel/MainAdminPanel';
import NewsAdminPanel from './ContentAdminPanel/NewsAdminPanel';
import RoomsAdminPanel from './ContentAdminPanel/RoomsAdminPanel';

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
      default:
        break;
    }
  }

  return (
    <div className={classes.AdminPanel}>
      { switchPath(location.pathname) }
    </div>
  )
}

export default AdminPanel