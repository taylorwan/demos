var app    = angular.module('demos', []);

app.controller('demosController', [
'$scope',
'$http',

function($scope, $http){
  $scope.test = 'Hello world!';
  $scope.lists = [];
  $scope.listLength = $scope.lists.length;

  $scope.addList = function() {
    $scope.lists.push({name: $scope.listname})
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

    $scope.name    = '';
    $scope.list    = '';
    $scope.message = '';
  };
}]);
