(function() {

  function chart() {
    return {
      restrict: 'E',
      templateUrl: 'template/chart-template.html',
      link: function(scope, element, attr) {
        var chartOptions = {};
        chartOptions.size = {
          height: attr.height,
          width: attr.width
        };
        chartOptions.data = scope.data;
        var chart = c3.generate(chartOptions);
      }
    };
  }

  function topNavBar() {
    return {
      restrict: 'E',
      scope: {
        options: '='
      },
      replace: true,
      templateUrl: 'templates/components/topNavBar.html',
      link: function(scope, element, attr) {
        scope.navData = scope.options;
        scope.isBrandImage = (scope.navData.logo.image) ? true : false;
        scope.brandImage = scope.navData.logo.image;
      }
    };
  }

  function secondaryTopNavBar() {
    return {
      restrict: 'E',
      scope: {
        menus: '='
      },
      replace: true,
      templateUrl: 'templates/components/secondaryTopNavBar.html',
      link: function(scope, element, attr) {

      }
    };
  }

  function sideNavBar() {
    return {
      restrict: 'E',
      scope: {
        menus: '=',
        top: '='
      },
      replace: true,
      templateUrl: 'templates/components/sideNavBar.html',
      link: function(scope, element, attr) {
        if(scope.top) {
          angular.element(element.children()[0]).addClass('top-nav-bar');
        }
      }
    }
  }

  angular.module('appDirectives', [])
    .directive('topNavBar', topNavBar)
    .directive('secondaryTopNavBar', secondaryTopNavBar)
    .directive('sideNavBar', sideNavBar);
}());
