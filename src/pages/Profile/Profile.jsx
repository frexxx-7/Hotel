import React, { useEffect, useState } from 'react'
import classes from './Profile.module.scss'
import { useStateContext } from '../../context/ContextProvider'
import axiosCLient from '../../axios.client'
import { useNavigate } from "react-router-dom";
import Room from '../../components/Room/Room';

const Profile = () => {
  const { user, token, setUser, setToken } = useStateContext()

  const [userRooms, seetUserRooms] = useState([])

  const navigate = useNavigate()
  if (!token) {
    navigate('/main')
  }

  const onLogout = (ev) => {
    ev.preventDefault()

    axiosCLient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }
  useEffect(() => {
    user &&
    axiosCLient.get(`/userRooms/${user.id}`)
      .then(({ data }) => {
        console.log(data);
        seetUserRooms(data.rooms.reverse());
      })
  }, [user])

  return (
    <div className={classes.content}>
      <div className={classes.profileInfoContent}>
        <div className={classes.profileInfo}>
          <div className={classes.info}>
            <div className={classes.nameDiv}>
              <p className={classes.name}>Имя:</p>
              <p className={classes.name}>{user.name}</p>
            </div>
            <div className={classes.emailDiv}>
              <p className={classes.email}>Почта</p>
              <p className={classes.email}>{user.email}</p>
            </div>
          </div>
          <div className={classes.exitButtonDiv}>
            <button className={classes.Button} onClick={onLogout}>Выход</button>
            <button className={classes.Button} onClick={() => navigate(`/editProfile/${user.id}`)}>Редактировать</button>
          </div>
        </div>

      </div>
      <div className={classes.roomsContent}>
        <div className={classes.rooms}>
          <h3 className={classes.roomsH3}>Команты:</h3>
        </div>
      </div>
      <div className={classes.blockRooms}>
          <div className={classes.blockRoomsContent}>
            <div className={classes.roomsPosts}>
              {userRooms.length == 0 ?
                <div className={classes.loader}>
                  <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                :
                ""
              }
              {
                userRooms && userRooms &&
                Object.values(userRooms).map((elem, key) => {
                  return <Room room={elem} key={key} />
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile