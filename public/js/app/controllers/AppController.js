(function() {
    angular
        .module('app')
        .controller('AppController', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.testText = 'Hello world! (Angular best)';
    };
})();
