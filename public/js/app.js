var app    = angular.module('demos', []);

app.controller('demosController', [
'$scope',
'$http',

function($scope, $http){
  $scope.test = 'Hello world!';

  $scope.createList = function() {
    console.log('in create list')
    var numbers = [];
    if ($scope.numbers) {
      numbers = $scope.numbers.split(',');
    }
    numbers = ['2125644453']
    $scope.lists.push({name: $scope.listname, numbers: numbers});
    console.log($scipe.lists);
  }

  $scope.sendCampaign = function() {
    console.log('in sendCampaign')
    $http.post('http://localhost:3100/send-text', {
      "msg" : $scope.message,
      "name": $scope.name,
      "list": $scope.list
    }).success(function(data){
     console.log(data);
    });
  };
}]);
