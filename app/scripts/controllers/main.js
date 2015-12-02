'use strict';

/**
 * @ngdoc function
 * @name dataDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataDashboardApp
 */
angular.module('dataDashboardApp')
    .controller('MainCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.last = 9;
        $scope.data = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0}];

        $scope.graph = new Rickshaw.Graph({
            element: document.querySelector('#chart'),
            width: 580,
            height: 250,
            series: [{
                color: 'steelblue',
                data: $scope.data
            }]
        });

        new Rickshaw.Graph.Axis.Time( { graph: $scope.graph } );

        $scope.graph.render();

        $scope.addData = function() {
            $scope.data.shift();
            $scope.data.push({x:++$scope.last, y: Math.floor(Math.random() * 60) + 10  });
            $scope.graph.update();
        };
    });
