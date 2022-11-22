import React, { useState } from 'react'
import SearchTool from './components/search_tool'
import 'semantic-ui-css/semantic.min.css'
import {getCityDetails, getCityWeatherDetails} from './services/services'
import getWeatherIconPath from './services/helper_func'
import WeatherCard from './components/result_card'



function App () {

//Input   
const [cityName, setCityName] = useState('Turku')
const handleCityNameChange = (event) => {
  setCityName(event.target.value)
}
//City Key
const [cityKey, setCityKey] = useState('')
//City Weather Info
const [cityWeatherInfo, setCityWeatherInfo] = useState({ })



const handleGetWeatherInfo = (event) => {
  event.preventDefault()
  console.log(cityName)
  getCityDetails(cityName).then(
    cityDetails => {
      console.log('promise fulfilled')
      console.log(cityDetails)
      setCityKey(cityDetails[0].Key)
      console.log('Key'+ cityKey)
    } ).then(
      
      getCityWeatherDetails(cityKey).then(
      cityWeatherResult => {
        console.log('promise fulfilled2')
        console.log(cityWeatherResult )  
        let temp = {headline: cityWeatherResult.Headline.Text,
          dayIcon: getWeatherIconPath(cityWeatherResult.DailyForecasts[0].Day.Icon),
        nightIcon: getWeatherIconPath(cityWeatherResult.DailyForecasts[0].Night.Icon),
      maxTemp: cityWeatherResult.DailyForecasts[0].Temperature.Maximum.Value,
    minTemp: cityWeatherResult.DailyForecasts[0].Temperature.Minimum.Value}   
        setCityWeatherInfo(temp)
        console.log(temp)
        console.log(cityWeatherInfo)
        }
        
        ))
}




    return (
      <div className="App">
       <SearchTool onClick={handleGetWeatherInfo} cityNm={cityName} handleCityNmChange={handleCityNameChange}/>
       <WeatherCard props={cityWeatherInfo}/> 
      </div>
    )
  }


export default App