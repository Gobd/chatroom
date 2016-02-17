app.controller('mainCtrl', function($scope, parseService){

  $scope.getData = function() {
    parseService.getData().then(function(response) {
    $scope.messages = response.data.results;
  });
};

$scope.getData();

  $scope.postData = function() {
    parseService.postData($scope.message).then(function(response) {
  });
  $scope.message = '';
  $scope.getData();
};

  // setInterval(function(){
  //   $scope.getData();
  // }, 1500);
  
});
