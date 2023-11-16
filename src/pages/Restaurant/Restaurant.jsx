import React from 'react'
import classes from './Restaurant.module.scss'

const Restaurant = () => {
  return (
    <div className={classes.restaurant_container}>
      <h1>Ресторан</h1>
      <div className={classes.restaurant_info}>
        <div className={classes.restaurant_image}>
          <img src="restaurant-image.jpg" alt="Ресторан" />
        </div>
        <div className={classes.restaurant_details}>
          <h2>Название ресторана</h2>
          <p>Адрес: улица, город, страна</p>
          <p>Телефон: +1234567890</p>
          <p>Время работы: Понедельник-Воскресенье, 9:00-22:00</p>
          <p>Кухня: Итальянская, Французская, Японская</p>
        </div>
      </div>
      <div className={classes.restaurant_description}>
        <h2>Описание ресторана</h2>
        <p>Здесь вы можете добавить описание вашего ресторана. Расскажите о его уникальности, атмосфере и особенностях меню. Укажите, что ваш ресторан использует только свежие ингредиенты высокого качества и предлагает широкий выбор блюд для разных вкусов.</p>
      </div>
    </div>
  )
}

export default Restaurant