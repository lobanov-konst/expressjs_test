(function() {
    angular
        .module('app')
        .controller('FSTOController', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.testText = 'FSTO';
    };
})();
