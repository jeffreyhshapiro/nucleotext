angular.module('nucleotext')
  .controller('selectAlg', function($scope, $http) {
    $scope.chooseCalcMethod = true;
    $scope.selectAlg = function() {
      if ($scope.alg === 'binary') {
        $scope.showNucleotext();
      } else if ($scope.alg === 'baseFour' && $scope.decode) {
        $scope.decoder();
      } else if ($scope.alg === 'baseFour') {
        $scope.showNucleotext();
      } else if (!$scope.alg || $scope.nucleotext === ''){
        $scope.chooseCalcMethod = false;
      }
      //direct logic to store data into an object depending on if $scope.alg = binary or base four
      if ($scope.alg === 'binary') {
        $scope.queryData= {
          type: $scope.alg,
          nucleotext: $scope.nucleotext,
          binaryString: $scope.binaryString,
          nucleotideString: $scope.nucleotideString,
          possibilities: $scope.possibilitiesFixed
        }
      } else {
        $scope.queryData = {
          type: $scope.alg,
          nucleotext: $scope.nucleotext,
          baseFourString: $scope.baseFourString,
          nucleotideString: $scope.nucleotideStringBaseFour,
        }
      }
      //After the object to be used is determined, do a post request to server.js
      $http.post('/nucleotexts', $scope.queryData).then(
        function(response) {
          $scope.res = response.data;
        },
        function(err) {
          $scope.err = err;
        })
    }
  })
