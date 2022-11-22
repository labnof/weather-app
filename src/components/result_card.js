import React from 'react'
import { Header , Label } from 'semantic-ui-react'

const WeatherCard = (props) => (
  <div> 
  <Header as='h5'>{props.headline}</Header>
  <Label as='a' image>
      <img alt='' src={props.dayIcon} />
      Day
      </Label>

      <Label as='a' image>
      <img alt='' src={props.nightIcon} />
      Night
      </Label>
    
    

    
      </div>
)

export default WeatherCard