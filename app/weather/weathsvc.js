var app = angular.module('directives')
app.service('weatherService', function ($http, $q) {
  this.getWeather = function (city) {
    var deferred = $q.defer()
    $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&mode=json&appid=be22f778633d53500a0fe39dc09ba5d5')
      .then(function (data) {
        deferred.resolve({
          temperature: data.data.main.temp,
          weather: data.data.weather[0].description
        })
      })
    return deferred.promise
  }
})
