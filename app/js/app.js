var app = angular.module('myApp', [])

app.controller('myController', function($scope, $q, $log, UserService, $http, $sce) {
    $scope.message = 'angular test!';
    UserService.then(
        function(data) {
            $log.info(data);
            $scope.users = data;
        },
        function(reason) {
            $log.error(reason);
        }
    );

    $http.get('http://localhost:8080/movies')
        .success(function(data, status, headers, config) {
            $scope.movies =  $sce.trustAsHtml(data);
        });
});

app.service('UserService', function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        users = [];
        users.push({
            'name': 'john'
        });
        users.push({
            'name': 'smith'
        });
        users.push({
            'name': 'allen'
        });
        defer.resolve(users);
        // defer.reject('error retrieving user info');
    }, 2000);
    return defer.promise;
});
