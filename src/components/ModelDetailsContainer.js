import * as React from 'react'
import ModelDetails from './ModelDetails'
import {connect} from 'react-redux'
import {addModel} from "../actions/models"

class ModelDetailsContainer extends React.Component {
  render() {
    console.log("Rendering ModelDetails from its Container with props:", this.props.modelDetails)
    return this.props.modelDetails.map(model => {
      return <ModelDetails model={model} />
    })
  }
}

const mapStateToProps = (state) => {
  return {
    modelDetails: state
  }
}

export default connect(mapStateToProps, {addModel})(ModelDetailsContainer)
