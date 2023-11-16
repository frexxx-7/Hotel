import React from 'react'
import classes from './Gym.module.scss'

const Gym = () => {
  return (
    <div className={classes.contentGym}>
      <div className={classes.containerTable}>
        <table border={1}>
          <tbody>
            <tr>
              <td align='center'>Наименование услуги</td>
              <td align='center'>Вид услуги</td>
              <td align='center'>Стоимость, руб</td>
              <td align='center'>Действует с</td>
            </tr>
            <tr>
              <td rowSpan={3} align='center'>Физкультурно-оздоровительные услуги</td>
              <td align='center'>Занятие на тренажерах (за 1 час)</td>
              <td align='center'>1,70</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'>Занятия в большом спортивном зале группой из 10-12 человек (за 1 час)</td>
              <td align='center'>24,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'>Занятия в малом спортивном зале группой из 10-12 человек (за 1 час)</td>
              <td align='center'>16,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td rowSpan={7} align='center'>Прокат велосипедов сторонним лицам</td>
              <td align='center'>В 2 часа</td>
              <td align='center'>4,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'></td>
              <td align='center'>На сутки</td>
              <td align='center'>9,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'></td>
              <td align='center'>На двое суток</td>
              <td align='center'>16,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'></td>
              <td align='center'>На трое суток</td>
              <td align='center'>22,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'></td>
              <td align='center'>На неделю</td>
              <td align='center'>45,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'></td>
              <td align='center'>На десять суток</td>
              <td align='center'>55,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
              <td align='center'></td>
              <td align='center'>На две недели</td>
              <td align='center'>65,00</td>
              <td align='center'>11.04.2022</td>
            </tr>
            <tr>
          <td  align='center'  rowSpan="7">Прокат велосипедов учащимся и сотрудникам колледжа</td>
          <td align='center'>В 2 часа</td>
          <td >3,50</td>
          <td >11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center">На сутки</td>
          <td className="has-text-align-center" data-align="center">7,50</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center">На двое суток</td>
          <td className="has-text-align-center" data-align="center">13,00</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center">На трое суток</td>
          <td className="has-text-align-center" data-align="center">18,00</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center">На неделю</td>
          <td className="has-text-align-center" data-align="center">38,00</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center">На десять суток</td>
          <td className="has-text-align-center" data-align="center">45,00</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center">На две недели</td>
          <td className="has-text-align-center" data-align="center">52,00</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center" rowSpan="2">Прокат лыж</td>
          <td className="has-text-align-center" data-align="center">В 2 часа</td>
          <td className="has-text-align-center" data-align="center">3,00</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
        <tr>
          <td className="has-text-align-center" data-align="center">На сутки</td>
          <td className="has-text-align-center" data-align="center">7,00</td>
          <td className="has-text-align-center" data-align="center">11.04.2022</td>
        </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Gym