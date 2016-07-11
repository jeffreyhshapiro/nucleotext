angular.module('nucleotext')
  .factory('binaryTransform', function() {
    return {
      convertToBinary: function(nucleotext) {
        // console.log(nucleotext)
        // $scope.baseFourString = false; //if baseFourString is showing on page, hide it
        var binaryText = [];
        for (var i = 0; i < nucleotext.length; i++) {
          if (nucleotext[i] === ' ') {
            binaryText.push('0100000') //js pushes 10000 for a space character which makes parsing an array unnecessarily hard
          } else {
            binaryText.push(nucleotext[i].charCodeAt(0).toString(2))
          }
        }
        binaryString = binaryText.join('')
        console.log(binaryString)
        return binaryString;
      },
      generateNucleotideSequenceBinary: function($scope) {
        $scope.nucleotideStringBaseFour = false; //if nucleotideStringBaseFour is showing on page hide it
        $scope.at = ['A','T']
        $scope.gc = ['G','C']
        $scope.nucleotides = []
        for (var i = 0; i < $scope.binaryString.length; i++) {
          var randomIndex = Math.floor(Math.random() * 2)
          if ($scope.binaryString[i] === '0') {
            $scope.nucleotides.push($scope.at[randomIndex])
          } else {
            $scope.nucleotides.push($scope.gc[randomIndex])
          }
        }
        $scope.nucleotideString = $scope.nucleotides.join('')
        $scope.calcSequences();
      },
      calcSequences: function() {
        var possibilities = Math.pow(2, $scope.nucleotides.length)
        $scope.possibilitiesFixed = Number(possibilities).toFixed(0)
      }
    }
  })
