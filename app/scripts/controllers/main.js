'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.modalShown = true;
    $scope.modalTemplate = 'views/modal_welcome.html';

  });
