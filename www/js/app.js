var Gam3ayaApp = angular.module('Gam3ayaApp', ['ionic', 'ionic.cloud'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicCloudProvider) {

  $ionicCloudProvider.init({
    "core": {
      "app_id": "d43a08d3"
    }
  })

  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('app.signin', {
    url: '/signin',
    views: {
      'menuContent': {
        templateUrl: 'templates/signin.html',
        controller: 'SignInCtrl'
      }
    }
  })

  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'SignUpCtrl'
      }
    }
  })

  .state('app.create_group', {
    url: '/create_group',
    views: {
      'menuContent': {
        templateUrl: 'templates/create_group.html',
        controller: 'CreateGroupCtrl'
      }
    }
  });


  $urlRouterProvider.otherwise('/app/signin');
});
