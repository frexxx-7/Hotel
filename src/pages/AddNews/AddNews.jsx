import React, { useState } from 'react'
import classes from './AddNews.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalWindow from '../../components/UI/ModalWindow/ModalWindow'
import ViewImage from '../../components/UI/ModalWindow/ViewImage/ViewImage'

const AddNews = () => {

  const [selectedImage, setSelectedImage] = useState()
  const [visibleModal, setVisibleModal] = useState(false)

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
    selectImg.style = "display:block"
  }

  const changeImage = (e) => {
    const fileElem = document.getElementById("fileElem");
    if (fileElem) {
      fileElem.click();
    }
  }
console.log(selectedImage);
  return (
    <div className={classes.addNews}>
      <div className={classes.addNewsWindow}>
        <div className={classes.addNewsContent}>

          <div className={classes.header}>
            <h1>Добавить новость</h1>
          </div>

          <div className={classes.inputs}>
            <input type="text" className={classes.dataInput} name="Title" placeholder='Заголовок' />
            <textarea type="textarea" className={classes.dataInput} name="Content" placeholder='Контент' />
          </div>

          <ModalWindow visible={visibleModal} setVisible={setVisibleModal} children={<ViewImage image = {selectedImage}/>}/>

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
            <img src="none"
              alt="Selected image"
              style={{ display: "none" }}
              id="selectImg"
              className={classes.selectImg} 
              onClick={(e)=>setVisibleModal(true)}/>
          </div>
          <div className={classes.isPublishedCheckBox}>
            <p>Публиковать</p>
            <input type="checkBox" />
          </div>
        </div>
        <div className={classes.addButtonDIv}>
          <button>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default AddNews