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
    $scope.reset = function() {
      $scope.btnActive = false;
      $scope.showAnswer = false;
      $scope.secondsInput = '';
      $scope.secondsTmp = 0;
      $scope.seconds = 0;
      $scope.weeks = 0;
      $scope.days = 0;
      $scope.hours = 0;
      $scope.minutes = 0;
      $scope.years = 0;
    };
    $scope.refresh = function() {
      $scope.btnActive = true;
      $scope.secondsTmp = $scope.secondsInput;
      $scope.showAnswer = true;
      while ($scope.secondsTmp >= 60) {
        if ($scope.secondsTmp >= $scope.secInYear) {
          $scope.years = Math.floor($scope.secondsTmp / $scope.secInYear);
          $scope.secondsTmp = $scope.secondsTmp % $scope.secInYear;
        }
        if ($scope.secondsTmp >= $scope.secInWeek) {
          $scope.weeks = Math.floor($scope.secondsTmp / $scope.secInWeek);
          $scope.secondsTmp = $scope.secondsTmp % $scope.secInWeek;
        }
        if ($scope.secondsTmp >= $scope.secInDay) {
          $scope.days = Math.floor($scope.secondsTmp / $scope.secInDay);
          $scope.secondsTmp = $scope.secondsTmp % $scope.secInDay;
        }
        if ($scope.secondsTmp >= $scope.secInHour) {
          $scope.hours = Math.floor($scope.secondsTmp / $scope.secInHour);
          $scope.secondsTmp = $scope.secondsTmp % $scope.secInHour;
        }
        if ($scope.secondsTmp >= $scope.secInMin) {
          $scope.minutes = Math.floor($scope.secondsTmp / $scope.secInMin);
          $scope.seconds = $scope.secondsTmp % $scope.secInMin;
          $scope.secondsTmp = $scope.seconds;
        }
      }
      $scope.btnActive = false;
    };
    // $scope.showAnswer = false;
    // $scope.btnActive = false;
    // $scope.secondsInput = '';
    // $scope.secondsTmp = 0;
    // $scope.seconds = 0;
    // $scope.weeks = 0;
    // $scope.days = 0;
    // $scope.hours = 0;
    // $scope.minutes = 0;
    // $scope.years = 0;
    $scope.reset();
    $scope.secInMin = 60;
    $scope.secInHour = 3600;
    $scope.secInDay = 86400;
    $scope.secInWeek = 604800;
    $scope.secInYear = 31536000;    
  });
