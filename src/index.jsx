/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css';

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => <div>Hello Docker!</div>;

class App extends Component {
  state = { weatherData: {} };
  componentDidMount() {
    fetch('https://weatherapp.eficode.fi/api/forecast')
      .then(res => res.json())
      .then(data => this.setState({ weatherData: data }))
      .catch(err => console.log(err));
  }
  render() {
    console.log('state', Object.entries(this.state.weatherData));
    const weatherDataFromAPI = Object.entries(this.state.weatherData).map((resource, i) => {
      return resource.map(data => <span key={data + i}>{data}</span>);
    });
    return (
      <div>
        <Hello />
        {weatherDataFromAPI}
      </div>
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(<App />, document.getElementById('root'));
