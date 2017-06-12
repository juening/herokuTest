import React from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h4 className="text-center">Temperature of {location} is {temp}</h4>
    </div>
  );
}

export default WeatherMessage;
