/* Services */

app.service('characterService', function () {
  this.character = $scope.character;
});

/* Factories */

app.factory('marvel', ['$http', function ($http) {
 

  const list = function (urlList) {
    return $http.get(urlList)
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  }

  const search = function (urlHero) {
    return $http.get(urlHero).success(function (dataHero) {
      return dataHero;
    }).error(function (err) {
      return err;
    });
  }

  const getById = function (urlWithCharacterId) {
    return $http.get(urlWithCharacterId)
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  }

  return { list: list, search: search, getById: getById }
}]);
