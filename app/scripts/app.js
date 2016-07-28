'use strict';

/**
 * @ngdoc overview
 * @name webPageApp
 * @description
 * # webPageApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('webPageApp', ['smoothScroll']);

  myApp.directive('carousel', function($timeout) {
   return {
      restrict: 'E',
      scope: {
        carouselId: '@',
        links: '='
      },
      templateUrl: 'views/carousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
   }
});
