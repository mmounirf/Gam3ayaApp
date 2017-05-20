Gam3ayaApp.controller('AppCtrl', function($scope, $rootScope, $state, $ionicSideMenuDelegate) {

$rootScope.go_to = function(page_name){
  $state.go(page_name)
}

})
