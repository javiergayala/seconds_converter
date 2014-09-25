'use strict';

/**
 * @ngdoc overview
 * @name secondsbehindApp
 * @description
 * # secondsbehindApp
 *
 * Main module of the application.
 */
angular
  .module('secondsbehindApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/seconds_calc', {
        templateUrl: 'views/seconds_calc.html',
        controller: 'SecondsCalcCtrl'
      })
      .otherwise({
        redirectTo: '/seconds_calc'
      });
  });
