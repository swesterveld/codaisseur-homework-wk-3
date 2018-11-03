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
  }

  renderMenu = () => {
    return(
      <select value={this.state.selectedModel} onChange={this.updateSelection}>
        <option value="">-- pick a model --</option>
        { Object.keys(data).map(model =>
          <option key={model} value={model}>{`${model} (${data[model].year})`}</option>
        )}
      </select>
    )
  }

  buttonHandler = () => {
    const model = {
      name: this.state.selectedModel,
      ...data[this.state.selectedModel]
    }
    this.props.addModel(model)
  }

  render() {
    return (
      <div className="App">
        <div>
          <ModelDetailsContainer/>
        </div>
        <div>
          { this.renderMenu() }
          <button onClick={() => this.buttonHandler()}>Add</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({selectedModel: state.selectedModel})

export default connect(mapStateToProps,{addModel})(App);
