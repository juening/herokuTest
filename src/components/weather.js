import React, { Component } from 'react';
import WeatherForm from './weatherForm';
import WeatherMessage from './weatherMessage';
import OpenWeatherMap from '../../api/openWeatherMap';
import ErrorModal from './errorModal';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: null
    };
    this.handleSearch = this.handleSearch.bind(this);
    //even in the parent component,
  }

  handleSearch(location) {
    this.setState({ isLoading: true, errorMessage: null });
    OpenWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location,
        temp,
        isLoading: false
      });
    }, (err) => {
      this.setState({ isLoading: false, errorMessage: err.message });
    });
  }


  render(){
    const {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching Weather</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError() {
      if(errorMessage) {
        return <ErrorModal message={errorMessage} />
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;
