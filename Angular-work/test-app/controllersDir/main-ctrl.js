angular.module('appModule.controllers', []).controller('appCtrl', ['$scope', 'appFactory',
    function($scope, appFactory) {
        var _results = appFactory.getRaceResults();
        _results.then(function(data) {

            data.forEach(function(aSome) {
                aSome.number = parseInt(aSome.number, 10);
                aSome.position = parseInt(aSome.position, 10);
            });


            $scope.raceResults = data;
        });

        $scope.sortCriteria = 'number';
        $scope.sortReverse = false;
        $scope.filterBy = ""
    }
])