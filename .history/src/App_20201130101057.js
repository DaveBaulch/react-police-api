import './App.css';
import React from 'react';
import axios from 'axios';
import Dropdown from './components/Dropdown';

class App extends React.Component {
  state = {
    forces: [],
    selectedForce: null,
    coords: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ coords: position.coords }),
      (err) => this.setState({ errorMessage: err.message })
    );

    axios
      .get('https://data.police.uk/api/forces')
      .then((response) => {
        console.log(response.data);
        const forces = response.data;
        this.setState({ forces: forces });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Current coordintes: {this.state.lat}, {this.state.lat}
        </h1>
        <Dropdown forces={this.state.forces} />
        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
