import axios from 'axios'

const getCityDetails = async (cityName) => {
  console.log(process.env.REACT_APP_CITY_WEATHER_URL)
  let url = `${process.env.REACT_APP_CITY_SEARCH_URL}apikey=${process.env.REACT_APP_API_KEY}&q=${cityName}`
  console.log(url)
    const request = axios.get(url)
    const response = await request
    return response.data
  }

const getCityWeatherDetails = async (cityCode) => {
  let url = `${process.env.REACT_APP_CITY_WEATHER_URL}${cityCode}?apikey=${process.env.REACT_APP_API_KEY}`

  console.log(url)
  console.log(process.env.REACT_APP_CITY_WEATHER_URL)
  const request = axios.get(url)
    const response = await request
    return response.data
  }

  export {getCityDetails, getCityWeatherDetails}