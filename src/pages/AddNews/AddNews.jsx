import React, { useEffect, useRef, useState } from 'react'
import classes from './AddNews.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalWindow from '../../components/UI/ModalWindow/ModalWindow'
import ViewImage from '../../components/UI/ModalWindow/ViewImage/ViewImage'
import axiosCLient from '../../axios.client'
import { useLocation, useNavigate } from 'react-router-dom'

const AddNews = () => {

  const [selectedImage, setSelectedImage] = useState()
  const [visibleModal, setVisibleModal] = useState(false)
  const [errors, setErrors] = useState([])
  const [infoNews, setInfoNews] = useState()

  const titleRef = useRef()
  const contentRef = useRef()
  const isPublishedRef = useRef()

  const navigate = useNavigate()
  const location = useLocation()

  const idNews = location.pathname.split('/')[location.pathname.split('/').length - 1];

  const loadInfoNews = () => {
    if (location.pathname.split('/')[1] == "editNews") {
      axiosCLient.get(`/news/${location.pathname.split('/')[2]}`)
        .then(({ data }) => {
          if (data) {
            setInfoNews(data.news);
            titleRef.current.value = data.news.title
            contentRef.current.value = data.news.content
            isPublishedRef.current.checked = data.news.is_published
            setSelectedImage(data.news.image)
          }
        })
        .catch(({ response }) => {
          console.log(response);
        })
    }
  }

  useEffect(() => {
    loadInfoNews();
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

  const editNewsToDatabase = () => {
    const payload = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      image: selectedImage,
      is_published: isPublishedRef.current.checked,
    }
    axiosCLient.post(`/editNews/ ${idNews}`, payload)
      .then(({ data }) => {
        if (data) {
          if(data.news == 1)
           navigate(`/news/${idNews}`)
        }
      })
      .catch(err => {
        const response = err.response
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  const addNewsToDatabase = () => {
    const payload = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      image: selectedImage,
      is_published: isPublishedRef.current.checked,
    }
    axiosCLient.post('/addNews', payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          navigate(`/news/:${data.news.id}`)
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
                location.pathname.split('/')[1] == "addNews"
                  ?
                  "Добавить новость"
                  :
                  "Редактировать новость"
              }
            </h1>
          </div>

          <div className={classes.inputs}>
            <input ref={titleRef} type="text" className={classes.dataInput} name="Title" placeholder='Заголовок' />
            <textarea ref={contentRef} type="textarea" className={classes.dataInput} name="Content" placeholder='Контент' />
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
          <div className={classes.isPublishedCheckBox}>
            <p>Публиковать</p>
            <input type="checkBox" ref={isPublishedRef} />
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
            location.pathname.split('/')[1] == "addNews"
              ?
              <button onClick={addNewsToDatabase}>Добавить</button>
              :
              <button onClick={editNewsToDatabase}>Редактировать</button>
          }
        </div>
      </div>
    </div>
  )
}

export default AddNews