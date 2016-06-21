(function() {
  var app = angular.module('app', ['app.routes', 'appDirectives', 'hljs']);

  app.controller('MainCtrl', ['$scope', function($scope) {

      $scope.chartData1 = {
          columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
          ],
          type: 'line'
      };
      $scope.chartData2 = {
            columns: [
              ['data1', 30],
              ['data2', 120],
          ],
          type: 'pie'
      };

      $scope.componentsList = {
        brand: {
          name: 'Angular Components',
          url: 'landing'
        },
        menus: [{
          name: 'Project Scaffolding',
          iconClass: '',
          url: 'projectScaffolding'
        }, {
          name: "Top NavBar",
          iconClass: '',
          url: 'topNavigationBar'
        }, {
          name: "Secondary Top NavBar",
          iconClass: '',
          url: 'secondaryTopNavBar'
        }, {
          name: "Footer",
          iconClass: '',
          url: 'footer'
        }, {
          name: 'Side NavBar',
          iconClass: '',
          url: '/sideNavBar'
        }, {
          name: 'Charts Widget',
          iconClass: '',
          url: 'charts'
        }, {
          name: 'Project Table',
          iconClass: '',
          url: '/projectTable'
        }, {
          name: 'Google Maps Integration',
          iconClass: '',
          url: '/googleMaps'
        }]
      };

      $scope.footerData = {
        brand: "Makers",
        author: "Team Oct",
        socialMedia:[{
          name: 'facebook',
          iconClass: 'fa fa-facebook',
          route: ''
        }, {
          name: 'twitter',
          iconClass: 'fa fa-twitter',
          route: ''
        }, {
          name: 'google',
          iconClass: 'fa fa-google-plus',
          route: ''
        }]
      };

      $scope.navData = {
        logo: {
          name: "Markers",
          image: "http://getbootstrapadmin.com/remark/material/topicon/assets/images/logo-blue.png"
        },
        search: true,
        notification: {
          show: true,
          iconClass: "fa fa-bell-o"
        },
        messages: {
          show: true,
          iconClass: "fa fa-paper-plane-o"
        },
        user: {
          show: true,
          image: "http://getbootstrapadmin.com/remark/material/global/portraits/5.jpg",
          menuOptions: [{
            iconClass: "fa fa-cogs",
            name: "Settings",
            toRoute: ""
          }, {
            iconClass: "fa fa-sliders",
            name: "My-Page",
            toRoute: ""
          }, {
            iconClass: "fa fa-sign-out",
            name: "Logout",
            toRoute: ""
          }]
        }
      };

      $scope.secondaryMenuList = [{
        name: "Weather Widgets",
        iconClass: "",
        url: ""
      }, {
        name: "Chart Widgets",
        iconClass: "",
        url: ""
      }, {
        name: "Statistics",
        iconClass: "",
        url: ""
      }, {
        name: "Maps Integration",
        iconClass: "",
        url: ""
      }, {
        name: "Work Widgets",
        iconClass: "",
        url: ""
      }];
  }]);
}());
