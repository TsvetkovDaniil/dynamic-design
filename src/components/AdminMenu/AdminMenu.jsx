import React from 'react'
import classes from './AdminMenu.module.css'
import Button from '../UI/button/Button'

const AdminMenu = () => {
  return (
    <div className={classes.adminMenu}>
      <h2>Редактор администратора</h2>
      <div className={classes.interface}>
        <div className={classes.separateBlock}>
          <h3>Тема</h3>
          <div className={classes.editor}>
            <div className={classes.buttonsContainer}>
              <Button>Загрузить новую тему</Button>
              <Button>Загрузить фоновое изображение</Button>
              <Button>Установить тему по умолчанию</Button>
            </div>
            <div className={classes.selectorContainer}>
              <select className={classes.selector}>
                <option value='' disabled selected>
                  Выберите тему
                </option>
                <option value='light'>Светлая</option>
                <option value='dark'>Темная</option>
                <option value='dark-blue'>Темно-синияя</option>
                <option value='dark-red'>Темно-красная</option>
              </select>
            </div>
          </div>
        </div>

        <div className={classes.separateBlock}>
          <h3>Шрифт</h3>
          <div className={classes.editor}>
            <div className={classes.buttonsContainer}>
              <Button>Загрузить новый шрифт</Button>
              <Button>Установить шрифт по умолчанию</Button>
            </div>
            <div className={classes.selectorContainer}>
              <select className={classes.selector}>
                <option value='' disabled selected>
                  Выберите шрифт
                </option>
                <option value='Times New Roman'>Times New Roman</option>
                <option value='Calibri'>Calibri</option>
                <option value='Arial'>Arial</option>
              </select>
              <select className={classes.selector}>
                <option value='' disabled selected>
                  Выберите размер шрифта
                </option>
                <option value='10px'>10px</option>
                <option value='15px'>15px</option>
                <option value='20px'>20px</option>
              </select>
            </div>
          </div>
        </div>

        <div className={classes.separateBlock}>
          <h3>Изменения</h3>
          <div className={classes.buttonsContainer}>
            <Button>Применить все изменения</Button>
            <Button>Сбросить все изменения</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
