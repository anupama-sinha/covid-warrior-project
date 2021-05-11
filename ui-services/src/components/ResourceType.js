import React, { Component } from 'react'
import axios from 'axios'

import { DropBox } from './Dropbox'

const END_POINTS = {
   ALL_RESOURCE_TYPE_API: 'http://localhost:8080/resourceTypes'
}

export default class ResourceType extends Component {
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
    const selectedResource = ev.target.value
    //Pass this value to ShareContact Component
    console.log("Resource Type Selected : ", selectedResource)
    this.props.onSelectResource({selectedRes : selectedResource})
  }

  handleKeyUp = (ev) => {
    const searchString = ev.target.value
    // update state
  }

  componentDidMount() {
    var initPromise = this.getData(END_POINTS.ALL_RESOURCE_TYPE_API)

    let names
    initPromise
    .then(resource => (
      names = resource.data.map(name => name),
      this.setState((prevState, props) => ({
        names,
      }))
    ))
  }

  attachResType = (move) => {
    this.props.sendResType(this.props.name, move);
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