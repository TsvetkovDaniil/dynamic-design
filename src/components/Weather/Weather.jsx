import React, { useEffect, useState } from 'react'
import classes from './Weather.module.css'
import Button from '../UI/button/Button'

const Weather = () => {
  const [permission, setPermission] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const [weather, setWeather] = useState('')
  const [temperature, setTemperature] = useState('')

  const apiKey = 'c21ed9306d5e5f30f0bf50646b5938d4'

  useEffect(() => {
    if (localStorage.getItem('clicked')) {
      setIsClicked(true)
    }
    if (localStorage.getItem('permission')) {
      setPermission(true)
      getGeolocationAndWeather()
    }
  }, [])

  const handleClick = (isPermitted) => {
    if (isPermitted) {
      localStorage.setItem('permission', 'true')
      setPermission(true)
      getGeolocationAndWeather()
    } else {
      localStorage.setItem('permission', 'false')
      setPermission(false)
    }

    localStorage.setItem('clicked', 'true')
    setIsClicked(true)
  }

  const getGeolocationAndWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    } else {
      // Браузер не поддерживает Geolocation API
      // Обработка ошибки
      console.log('Ошибка, геолокация не поддерживается!')
    }
  }

  const successCallback = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    // Обработка полученных координат
    getWeather(latitude, longitude)
  }

  const getWeather = async (lat, lon) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()

      const weatherMain = data.weather[0].main
      const temperatureMain = Math.ceil(data.main.temp / 10)

      setWeather(weatherMain)
      setTemperature(temperatureMain)
    } catch (error) {
      console.log(
        'Произошла ошибка при попытке получить данные о погоде: ' + error
      )
    }
  }

  const errorCallback = (error) => {
    console.log('Что-то пошло не так: ' + error + error.code)
  }

  return (
    <div className={classes.weather}>
      {isClicked ? (
        <>
          {permission ? (
            <div className={classes.weatherContainer}>
              <p>{temperature > 0 ? '+' + temperature : temperature}°C</p>
              <p>{weather}</p>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div className={classes.permissionWindow}>
          <h3 className={classes.header}>Доступ к местоположению</h3>
          <p>
            Для отображения текущей погоды в вашем городе необходимо разрешение
            на определение геолокации
          </p>
          <p>Открыть доступ?</p>
          <div className={classes.buttonsContainer}>
            <Button onClick={() => handleClick(true)}>Да</Button>
            <Button onClick={() => handleClick(false)}>Нет</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
