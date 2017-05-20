Gam3ayaApp.controller('SignInCtrl', function($scope, $ionicSideMenuDelegate, $http, $state, $ionicHistory, StorageService) {

$ionicSideMenuDelegate.canDragContent(false);

$scope.togglePassword = function(){
  $scope.showPassword = !$scope.showPassword;
}

$scope.signin = function(user){
  var signin_request = {
    method: 'POST',
    url: 'http://localhost/Gam3ayaAPI/api/index.php/login',
    headers: {
      'username': user.username,
      'password': user.password
    }
  }

$http(signin_request).then(function(response){
  console.log(response);
  $state.go('app.dashboard');
  $ionicHistory.nextViewOptions({
     disableBack: true
  });
  StorageService.set('token', response.data);

}, function(error){
    console.log(error)
});

}



})
