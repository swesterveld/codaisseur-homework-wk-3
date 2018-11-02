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
  renderMenu = () => {
    return(
      <select>
        <option value="">-- pick a model --</option>
        { Object.keys(data).map(model =>
          <option value={model}>{`${model} (${data[model].year})`}</option>
        )}
      </select>
    )
  }
  /*
  <!-- Expected Output -->
  <select>
    <option value="">-- pick a model --</option>
    <option value="Ivel Z3">Ivel Z3 (1969)</option>
    <option value="Bally Astrocade">Bally Astrocade (1977)</option>
    <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)</option>
    <option value="Commodore 64">Commodore 64 (1982)</option>
  </select>
  */
  render() {
    return (
      <div className="App">
        { this.renderMenu() }
      </div>
    );
  }
}

export default App;
