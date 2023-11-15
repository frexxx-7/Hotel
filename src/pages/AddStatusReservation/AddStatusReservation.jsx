import React from 'react'
import { useState } from 'react'
import classes from './AddStatusReservation.module.scss'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosCLient from '../../axios.client'

const AddStatusReservation = () => {
  const [errors, setErrors] = useState()

  const navigate = useNavigate()

  const nameRef = useRef()

  const addStatusReservationToDatabase = () => {
    const payload = {
      name: nameRef.current.value,
    }
    axiosCLient.post('/addStatusReservation', payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          navigate(`/rooms`)
        }
      })
      .catch(err => {
        const response = err.response
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div className={classes.addStatus}>
      <div className={classes.addStatusWindow}>
        <div className={classes.addStatusContent}>
          <div className={classes.header}>
            <h1>Добавить статус</h1>
          </div>

          <div className={classes.inputs}>
            <input ref={nameRef} type="text" className={classes.dataInput} name="Name" placeholder='Название' />
          </div>
          {errors &&
            <div>
              {Object.keys(errors).map(key => (
                <p className={classes.error} key={key}>{errors[key][0]}</p>
              ))}</div>
          }
        </div>
        <div className={classes.addButtonDIv}>
          {
              <button onClick={addStatusReservationToDatabase}>Добавить</button>
          }
        </div>
      </div>
    </div>
  )
}

export default AddStatusReservation