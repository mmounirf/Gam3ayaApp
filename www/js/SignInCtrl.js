Gam3ayaApp.controller('SignInCtrl', function($scope) {

$scope.togglePassword = function(){
  $scope.showPassword = !$scope.showPassword;
}

$scope.signin = function(user){
  console.log(user)
}


})
