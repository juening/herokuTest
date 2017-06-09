import React, { Component } from 'react';
import WeatherForm from './weatherForm';
import WeatherMessage from './weatherMessage';
import OpenWeatherMap from '../../api/openWeatherMap';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    //even in the parent component,
  }

  handleSearch(location) {
    this.setState({ isLoading: true });
    OpenWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location,
        temp,
        isLoading: false
      });
    }, (errMessage) => {
      this.setState({ isLoading: false });
      alert(errMessage);
    });
  }

  render(){
    const {isLoading, location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching Weather</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
