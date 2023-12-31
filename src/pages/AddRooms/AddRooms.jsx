import React, { useEffect, useRef, useState } from 'react'
import ModalWindow from '../../components/UI/ModalWindow/ModalWindow'
import classes from './AddRooms.module.scss'
import axiosCLient from '../../axios.client'
import ViewImage from '../../components/UI/ModalWindow/ViewImage/ViewImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

const AddRooms = () => {

  const [selectedImage, setSelectedImage] = useState()
  const [visibleModal, setVisibleModal] = useState(false)
  const [errors, setErrors] = useState([])

  const [infoRoom, setInfoRoom] = useState()

  const numberOfBedsRef = useRef()
  const squareRef = useRef()
  const numberRef = useRef()
  const priceRef = useRef()
  const quantityIsBusyRef = useRef()

  const navigate = useNavigate()
  const location = useLocation()

  const idRoom = location.pathname.split('/')[location.pathname.split('/').length - 1];

  const loadInfoRoom = () => {
    if (location.pathname.split('/')[1] == "editRoom") {
      axiosCLient.get(`/rooms/${location.pathname.split('/')[2]}`)
        .then(({ data }) => {
          if (data) {
            console.log(data);
            setInfoRoom(data.room);
            numberOfBedsRef.current.value = data.room.numberOfBeds
            squareRef.current.value = data.room.square
            numberRef.current.value = data.room.number
            priceRef.current.value = data.room.price
            quantityIsBusyRef.current.value = data.room.quantityIsBusy

            setSelectedImage(data.room.image)
          }
        })
        .catch(({ response }) => {
          console.log(response);
        })
    }
  }

  useEffect(() => {
    loadInfoRoom();
  }, [])

  const chooseImage = async (files) => {
    const selectImg = document.getElementById("selectImg");
    const file = files[0]
    if (!file.type.startsWith('image/')) { return '' }
    selectImg.file = file
    var reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
        setSelectedImage(e.target.result)
      };
    })(selectImg);
    reader.readAsDataURL(file);
  }

  const changeImage = (e) => {
    const fileElem = document.getElementById("fileElem");
    if (fileElem) {
      fileElem.click();
    }
  }

  const editRoomToDatabase = () => {
    const payload = {
      numberOfBeds: numberOfBedsRef.current.value,
      square: squareRef.current.value,
      number: numberRef.current.value,
      quantityIsBusy: quantityIsBusyRef.current.value,
      price: priceRef.current.value,
      image: selectedImage,
    }
    axiosCLient.post(`/editRoom/${idRoom}`, payload)
      .then(({ data }) => {
        if (data) {
          if (data.room == 1)
            navigate(`/rooms/${idRoom}`)
        }
      })
      .catch(err => {
        const response = err.response
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  const addRoomToDatabase = () => {
    const payload = {
      numberOfBeds: numberOfBedsRef.current.value,
      square: squareRef.current.value,
      number: numberRef.current.value,
      quantityIsBusy: quantityIsBusyRef.current.value,
      price: priceRef.current.value,
      image: selectedImage,
    }
    axiosCLient.post('/addRoom', payload)
      .then(({ data }) => {
        if (data) {
          navigate(`/rooms/${data.room.id}`)
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
    <div className={classes.addNews}>
      <div className={classes.addNewsWindow}>
        <div className={classes.addNewsContent}>

          <div className={classes.header}>
            <h1>
              {
                location.pathname.split('/')[1] == "addRooms"
                  ?
                  "Добавить комнату"
                  :
                  "Редактировать комнату"
              }
            </h1>
          </div>

          <div className={classes.inputs}>
            <input ref={numberOfBedsRef} type="text" className={classes.dataInput} name="NumbersOfBeds" placeholder='Кол-во кроватей' />
            <input ref={squareRef} type="text" className={classes.dataInput} name="Square" placeholder='Площадь' />
            <input ref={numberRef} type="text" className={classes.dataInput} name="Number" placeholder='Номер комнаты' />
            <input ref={quantityIsBusyRef} type="text" className={classes.dataInput} name="QuantityIsBusy" placeholder='Количество занятых кроватей' />
            <input ref={priceRef} type="text" className={classes.dataInput} name="price" placeholder='Цена за один день' />
          </div>

          <ModalWindow visible={visibleModal} setVisible={setVisibleModal} children={<ViewImage image={selectedImage} />} />

          <div className={classes.addPhoto}>
            <p>Добавьте фото:</p>
            <div className={classes.icon} onClick={changeImage}><FontAwesomeIcon icon={faPlus} /></div>
            <input
              type="file"
              name="file"
              id="fileElem"
              style={{ display: "none" }}
              onChange={(e) => chooseImage(e.target.files)}
            />
            <img src={selectedImage}
              alt="Selected image"
              style={{ display: selectedImage ? "block" : "none" }}
              id="selectImg"
              className={classes.selectImg}
              onClick={(e) => setVisibleModal(true)} />
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
            location.pathname.split('/')[1] == "addRooms"
              ?
              <button onClick={addRoomToDatabase}>Добавить</button>
              :
              <button onClick={editRoomToDatabase}>Редактировать</button>
          }
        </div>
      </div>
    </div>
  )
}

export default AddRooms