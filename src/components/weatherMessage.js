import React from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>Temperature of {location} is {temp}</h3>
    </div>
  );
}

export default WeatherMessage;
