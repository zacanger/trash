var app = angular.module('nbaRoutes')

app.service('teamService', function ($http, $q) {
  // service code

  this.addNewGame = function (gameObj) {
    var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam
    if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
      gameObj.won = true
    } else {
      gameObj.won = false
    }

    return $http({
      method: 'POST',
      url: url,
      data: gameObj
    })
  }

  this.getTeamData = function (team) {
    var deferred = $q.defer()
    var url = 'https://api.parse.com/1/classes/' + team + '?order=-createdAt'

    $http({
      method: 'GET',
      url: url,
    })
      .then(function (data) {
        var results = data.data.results
        var wins = 0
        var losses = 0
        results.forEach(function (value, index) {
          if (value.won === true) {
            wins++
          } else {
            losses++
          }
        })

        results.wins = wins
        results.losses = losses
        console.log(results)
        deferred.resolve(results)

      }, function (error) {
        deferred.reject(error)
        console.log('code light bihhhhhh')
      })

    return deferred.promise
  }

})
