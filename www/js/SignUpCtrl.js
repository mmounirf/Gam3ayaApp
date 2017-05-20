Gam3ayaApp.controller('SignUpCtrl', function($scope, $ionicFacebookAuth, $ionicUser, $http) {

$scope.togglePassword = function(){
  $scope.showPassword = !$scope.showPassword;
}


$scope.signup = function(user){
console.log(user)
  var signup_request = {
    method: 'POST',
    url: 'http://localhost/Gam3ayaAPI/api/index.php/users/join',
    headers: {
      'username': user.username,
      'password': user.password,
      'phone': user.phone,
      'mail': user.email,
      'fullname': user.fullname,
      'address': user.address,
      'fb': user.facebook,
      'pp': user.profilepic
    }
  }

$http(signup_request).then(function(response){
  console.log(response)
}, function(error){
console.log(error)
});


}

$scope.signup_fb = function(){
$ionicFacebookAuth.login()
		.then(function () {
			console.log($ionicUser.social.facebook.data);
	    },function (error) {
            console.log(error)		
	    }
	);
}

})
