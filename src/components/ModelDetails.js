import * as React from 'react'

export default function ModelDetails(props) {

  const model= props.model|| []
  //console.log("Rendering ModelDetails from itself with props:", props)
  return (<div>
      <ul>
        <li>Name: {model.name}</li>
        <li>Manufacturer: {model.manufacturer}</li>
        <li>Year: {model.year}</li>
        <li>Origin: {model.origin}</li>
      </ul>
  </div>)
}