(function(){
  var app = angular.module('portfolio', ['ngAnimate', 'ui.bootstrap']);

  var projects = [
    { name: 'Portfolio', img: 'assets/img/p1.png'},
    { name: 'Resume', img: 'assets/img/resume.png'},
    { name: 'Bugger', img: 'assets/img/bugger.png'},
    { name: 'Pizza', img: 'assets/img/pizza.png'},
    { name: 'Groupon Locator', img: 'assets/img/Groupon.png'},
    { name: 'Feed-Reader Tester', img: 'assets/img/Feedreader.png'}
  ]

  app.controller("PortController", ['$scope', function($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = projects;
  }]);
})()

// <div class="col-md-4">
//     <div class="portfolio-item">
//         <img class="img-portfolio img-responsive img-rounded" alt="bugger image" src="assets/img/bugger.png" data-toggle="modal" data-target="#project3">
//         <a href="#" data-toggle="modal" data-target="#project3">Bugger</a>
//     </div>
// </div>
