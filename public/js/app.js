(function() {
  var app = angular.module('app', ['appDirectives']);

  app.controller('MyCtrl', ['$scope', function($scope) {
      $scope.secondaryMenuList = [{
        name: "Statistics",
        iconClass: "fa fa-tachometer"
      }, {
        name: "Charts",
        iconClass: "fa fa-bars"
      }, {
        name: "Social",
        iconClass: "fa fa-bullhorn"
      }, {
        name: "Weather",
        iconClass: "fa fa-sun-o"
      }];

      $scope.navData = {
        logo: {
          name: "Remark",
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

  }]);
}());
