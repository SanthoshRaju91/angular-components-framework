(function() {
  angular.module('app.routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('landing', {
          url: '/',
          templateUrl: 'templates/landing.html'
        })
        .state('projectScaffolding', {
          url: '/projectScaffolding',
          templateUrl: 'templates/projectScaffolding.html'
        })
        .state('topNavigationBar', {
          url: '/topNavigationBar',
          templateUrl: 'templates/topNavigationBar.html'
        })
        .state('secondaryTopNavBar', {
          url: '/secondaryTopNavBar',
          templateUrl: 'templates/secondaryTopNavBar.html'
        })
        .state('footer', {
          url: '/footer',
          templateUrl: 'templates/footerBar.html'
        })
        .state('charts', {
          url: '/charts',
          templateUrl: 'templates/charts.html'
        })
    });
}());
