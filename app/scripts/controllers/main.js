'use strict';

/**
 * @ngdoc function
 * @name webPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webPageApp
 */
angular.module('webPageApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.robocupCarousel =[
      { src:"images/robocup.jpg", alt:"", caption:"Robocup 2014, Brazil"},
      { src:"images/robocup2.jpg", alt:"", caption:"Robocup 2013, Netherlands"},
      { src:"images/robocup3.jpg", alt:"", caption:"Robocup 2013, Netherlands"}
   ];

   $scope.airQueueCarousel =[
     { src:"images/airqueue.png", alt:"", caption:""},
     { src:"images/airqueue2.png", alt:"", caption:""},
     { src:"images/airqueue3.png", alt:"", caption:""}
  ];
  });
