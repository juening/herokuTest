const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const appid = '81849dcf60c72d2a38d3a1ed3551ec98';

export default {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
      var requestUrl=`${OPEN_WEATHER_MAP_URL}q=${encodedLocation}&appid=${appid}&units=imperial`;
      return axios.get(requestUrl).then((res) => {
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, (err) => {
        throw new Error(err.response.data.message);
      });
  }
};
