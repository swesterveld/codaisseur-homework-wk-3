import React, { Component } from 'react';
import './App.css';

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
  updateSelection = (event) => {
    console.log(`Selected value '${event.target.value}' should be saved to the local state`)
    this.setState({value: event.target.value})
  }

  renderMenu = () => {
    return(
      <select onChange={this.updateSelection}>
        <option value="">-- pick a model --</option>
        { Object.keys(data).map(model =>
          <option value={model}>{`${model} (${data[model].year})`}</option>
        )}
      </select>
    )
  }

  render() {
    return (
      <div className="App">
        { this.renderMenu() }
      </div>
    );
  }
}

export default App;
