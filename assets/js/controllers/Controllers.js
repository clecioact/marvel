app.controller('MainController', ['$scope', 'marvel', '$http', function ($scope, marvel) {

  let urlList = apiUrl + apiPath + '&ts=' + apiTs + '&apikey=' + apiKey + '&hash=' + apiHash;

  marvel.list(urlList).success(function (data) {
    $scope.marvel = data;
  });

  $scope.addCharacter = function (nameHero) {
   
    let urlSearchHero = apiUrl + apiPath + 'nameStartsWith=' + nameHero + '&ts=1&apikey=' + apiKey + '&hash=' + apiHash;

    if (nameHero === "" || nameHero === null || nameHero === undefined) {
      marvel.list(urlList).success(function (data) {
        $scope.marvel = data;
      });

      return;
    }

    marvel.search(urlSearchHero).success(function (dataHero) {
      $scope.marvel = dataHero;
    })

  };
}]);

app.controller('ComicController', ['$scope', 'marvel', '$routeParams', function ($scope, marvel, $routeParams) {

  let urlCharacter = apiUrl + 'v1/public/characters/' + $routeParams.id + '?=&ts=1&apikey=' + apiKey + '&hash=' + apiHash;

  marvel.getById(urlCharacter).success(function (data) {
    $scope.detail = data.data.results[0];
  });
}]);

