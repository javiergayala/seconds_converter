'use strict';

/**
 * @ngdoc function
 * @name secondsbehindApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the secondsbehindApp
 */
angular.module('secondsbehindApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
