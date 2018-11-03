import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addModel} from './actions/models'
import ModelDetailsContainer from './components/ModelDetailsContainer'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedModel: ''}
  }

  updateSelection = (event) => {
    this.setState({selectedModel: event.target.value})
    console.log('Selected model:', event.target.value)
  }

  renderMenu = () => {
    return(
      <div>
        <ModelDetailsContainer/>
        <select value={this.state.selectedModel} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          { Object.keys(data).map(model =>
            <option value={model}>{`${model} (${data[model].year})`}</option>
          )}
        </select>
      </div>
    )
  }

  buttonHandler = () => {
    console.log('Button clicked')
    const model = data[this.state.selectedModel]
    console.log('Model:', model)
    this.props.addModel(model)
  }

  render() {
    return (
      <div className="App">
        { this.renderMenu() }
        <button onClick={() => this.buttonHandler()}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({selectedModel: state.selectedModel})

export default connect(mapStateToProps,{addModel})(App);
