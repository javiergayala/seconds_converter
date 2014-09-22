'use strict';

/**
 * @ngdoc function
 * @name secondsbehindApp.controller:SecondsCalcCtrl
 * @description
 * # SecondsCalcCtrl
 * Controller of the secondsbehindApp
 */
angular.module('secondsbehindApp')
  .controller('SecondsCalcCtrl', function ($scope) {
    $scope.seconds = 0;
    $scope.secondsTmp = $scope.seconds;
    $scope.weeks = 0;
    $scope.days = 0;
    $scope.hours = 0;
    $scope.minutes = 0;
    $scope.years = 0;
    $scope.secInMin = 60;
    $scope.secInHour = 3600;
    $scope.secInDay = 86400;
    $scope.secInWeek = 604800;
    $scope.secInYear = 31536000;
    console.log($scope.secondsTmp);
    while ($scope.secondsTmp >= 60) {
      if ($scope.secondsTmp >= $scope.secInYear) {
        $scope.years = $scope.secondsTmp / $scope.secInYear;
        $scope.secondsTmp = $scope.secondsTmp % $scope.secInYear;
      };
      if ($scope.secondsTmp >= $scope.secInWeek) {
        $scope.weeks = $scope.secondsTmp / $scope.secInWeek;
        $scope.secondsTmp = $scope.secondsTmp % $scope.secInWeek;
      };
      if ($scope.secondsTmp >= $scope.secInDay) {
        $scope.days = $scope.secondsTmp / $scope.secInDay;
        $scope.secondsTmp = $scope.secondsTmp % $scope.secInDay;
      };
      if ($scope.secondsTmp >= $scope.secInHour) {
        $scope.hours = $scope.secondsTmp / $scope.secInHour;
        $scope.secondsTmp = $scope.secondsTmp % $scope.secInHour;
      };
      if ($scope.secondsTmp >= $scope.secInMin) {
        $scope.years = $scope.secondsTmp / $scope.secInMin;
        $scope.secondsTmp = $scope.secondsTmp % $scope.secInMin;
      };
    }
  });
