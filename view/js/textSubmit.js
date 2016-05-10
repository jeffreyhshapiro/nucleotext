angular.module('nucleotext')
  .controller('submitText', function($scope){
    $scope.convertToBinary = function() {
      $scope.binaryText = [];
      for (var i = 0; i < $scope.nucleotext.length; i++) {
        $scope.binaryText.push($scope.nucleotext[i].charCodeAt(0).toString(2))
      };
      console.log($scope.binaryText)
      $scope.binaryString = $scope.binaryText.join('')
      $scope.generateNucleotideSequence();
    }
    $scope.generateNucleotideSequence = function() {
      $scope.at = ['A','T']
      $scope.gc = ['G','C']
      $scope.nucleotides = []
      for (var i = 0; i < $scope.binaryString.length; i++) {
        var randomIndex = Math.floor(Math.random() * 2)
        if ($scope.binaryString[i] === '0') {
          $scope.nucleotides.push($scope.at[randomIndex])
        } else {
          $scope.nucleotides.push($scope.gc[randomIndex])
        };
      };
      $scope.nucleotideString = $scope.nucleotides.join('')
    }
  })