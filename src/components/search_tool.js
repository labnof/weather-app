import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchTool = (props) => (
  <Input action={{
    onClick: props.onClick,
    color: 'green',
    labelPosition: 'right',
    icon: 'search',
    content: 'Search Weather Info',
  }}  placeholder='Search weather info by city.'  value={props.cityNm} onChange={props.handleCityNmChange}/>
)

export default SearchTool

