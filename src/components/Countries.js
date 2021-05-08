import React, { Component } from 'react'
import axios from 'axios'

import { DropBox } from './Dropbox'

const END_POINTS = {
   ALL_COUNTRIES_API: 'https://restcountries.eu/rest/v2/all'
}

class Countries extends Component {
  state = {
    names: []
  }

  async getData(END_POINT) {
    this.setState((prevState, props) => ({
      
    }))
    try{
      const response = await axios.get(END_POINT,
        {
          header:
            {'Content-Type': 'application/json'}
          })
        return response
    } catch(err) {
      console.log('Serer error:', err)
      return []
    }
  };

  handleChange = (ev) => {
    const selectedCountry = ev.target.value
    //TODO : Pass this value to Dashboard Component
    console.log("Country Selected : ", selectedCountry)
   
  }

  handleKeyUp = (ev) => {
    const searchString = ev.target.value
    // update state
  }

  componentDidMount() {
    var initPromise = this.getData(END_POINTS.ALL_COUNTRIES_API)

    let names
    initPromise
    .then(countries => (
      names = countries.data.map(country => country.name),
      this.setState((prevState, props) => ({
        names,
      }))
    ))
  }

  render(){
    return (
      <div>
        <DropBox
          handleChange={this.handleChange}
          names={this.state.names} />
      </div>
    )
  }
}

export default Countries