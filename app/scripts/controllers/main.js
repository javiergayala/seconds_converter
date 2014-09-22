'use strict';

/**
 * @ngdoc function
 * @name secondsbehindApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the secondsbehindApp
 */
angular.module('secondsbehindApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
