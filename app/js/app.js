var app = angular.module('myApp', [])
app.controller('myController', function($scope, $q) {
    $scope.message = 'angular test!';
    var defer = $q.defer();
    var promise = defer.promise;
    promise.then(function success(data) {
        console.log(data);
    }, function() {

    });
    $scope.doClick = function() {
        console.info('click');
        defer.resolve('resolved');
    }
});