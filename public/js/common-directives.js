/**
* Angular components file, having the code for all the common-directives / components being built.
* This will be integrated as a dependent module for using it as a directives.
* This file will be expanded going further andding more components along with adding additional features to
* the existing components being built.
*/

(function() {

  /**
  * @method chart
  * Directive method for chart, which is responsible for painting the charts in the UI. It uses C3.js library for building the charts.
  * @param - isolate scope data object, along with stylings
  * @return - DDO (Directive Definition Object).
  */
  function charts($timeout) {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        id: '='
      },
      replace: true,
      templateUrl: 'templates/components/chart-template.html',
      link: function(scope, element, attr) {
        var chartOptions = {};
        chartOptions.size = {
          height: attr.height,
          width: attr.width
        };
        chartOptions.bindto = '#'+scope.id;
        chartOptions.data = scope.data;
        //calling c3.js generate method to generate the chart with the chartOptions
        $timeout(function() {
          var chart = c3.generate(chartOptions);
        }, 10);
      }
    };
  }

  /**
  * @method topNavBar
  * Directive method for creating a top navigation bar on the page. Uses the bootstrap CSS framework to build the NavBar.
  * @param - isolate scope options, consisting of a list of navigation elements.
  * @param - isolate scope top, specifying whether the navigation bar should be fixed-top or not.
  * @return - DDO for painting the NavBar to the page.
  */
  function topNavBar() {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        top: '='
      },
      replace: true,
      templateUrl: 'templates/components/topNavBar.html',
      link: function(scope, element, attr) {
        scope.navData = scope.options;
        scope.isBrandImage = (scope.navData.logo.image) ? true : false;
        scope.isTop = (scope.top) ? 'navbar-fixed-top' : '';
        scope.brandImage = scope.navData.logo.image;
      }
    };
  }

  /**
  * @method secondaryTopNavBar
  * Directive method for creating a secondary top navigation bar just below the primary/top navigation bar. Can be used as an alternative to Side NavBar.
  * @param - isolate scope menus, a list of all the menu items required creating a the NavBar
  * @return DDO.
  */
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

  /**
  * @method sideNavBar
  * Directive method for creating a side navigation bar.
  * @param - isolate scope menus, a list of side nav-bar menu options
  * @param - isolate scope top, specifying whether the side nav-bar should start for the top or after the top-nav-bar
  * @return - DDO.
  */
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

  /**
  * @method footer
  * Directive method for creating a footer bar which will be painted on your web page.
  * @param isolate scope - data, list of data having author brand name and social media list for connecting the users to your product.
  * @param isolate scope - bottom, specifying should it stick to the bottom of the page and occupy the whole width.
  */
  function footer() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        bottom: '='
      },
      replace: true,
      templateUrl: 'templates/components/footer.html',
      link: function(scope, element, attr) {
        scope.year = new Date().getFullYear();
        scope.isBottom = (scope.bottom) ? 'navbar-fixed-bottom' : 'custom';

      }
    };
  }

  angular.module('appDirectives', [])
    .directive('topNavBar', topNavBar)
    .directive('secondaryTopNavBar', secondaryTopNavBar)
    .directive('sideNavBar', sideNavBar)
    .directive('footer', footer)
    .directive('charts', charts);
}());
