import React, { useState } from 'react'
import SearchTool from './components/search_tool'
import 'semantic-ui-css/semantic.min.css'
import {getCityDetails, getCityWeatherDetails} from './services'


function App () {

  
const [cityName, setCityName] = useState('')
const handleCityNameChange = (event) => {
  console.log(event.target.value)
  setCityName(event.target.value)
}


const handleAddPerson = (event) => {
  event.preventDefault()
  console.log(cityName)
  getCityDetails(cityName).then(
    cityDetails => {
      console.log('promise fulfilled')
      console.log(cityDetails)
      console.log(cityDetails[0].Key)
      let key = cityDetails[0].Key

      getCityWeatherDetails(key).then(
        cityWeatherInfo => {
          console.log('promise fulfilled2')
          console.log(cityWeatherInfo )  
        }
        )
  

    }
    )

    

}





    return (
      <div className="App">
       <SearchTool onClick={handleAddPerson} cityNm={cityName} handleCityNmChange={handleCityNameChange} />
      </div>
    )
  }


export default App