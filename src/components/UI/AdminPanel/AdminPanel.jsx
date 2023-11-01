import React, { useEffect } from 'react'
import classes from './AdminPanel.module.scss'
import { useLocation } from 'react-router-dom';
import MainAdminPanel from './ContentAdminPanel/MainAdminPanel';

const AdminPanel = () => {
  const location = useLocation()

  const switchPath = (pathname) => {
    switch (pathname) {
      case "/main":
        return MainAdminPanel
      case "/profile":
        return "profile"
      case "/news":
        return "news"
      case "/rooms":
        return "rooms"
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