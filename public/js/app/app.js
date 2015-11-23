(function() {
    var dependences = [
        'ui.router',
        'oc.lazyLoad'
    ];
    angular
        .module('app', dependences)
        .config(config)
        .run(run);

    config.$inject = ['$interpolateProvider', '$stateProvider', '$ocLazyLoadProvider', '$locationProvider', '$urlRouterProvider'];
    run.$inject = ['$rootScope', '$state'];

    function config($interpolateProvider, $stateProvider, $ocLazyLoadProvider, $locationProvider, $urlRouterProvider) {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
        //$locationProvider.html5Mode(true).hashPrefix('!');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $ocLazyLoadProvider.config({
            //'debug': true,
            'modules': [
                {'name': 'AppController', 'files': ['/js/app/controllers/AppController.js']}
            ]
        });
        $stateProvider
            .state('index', {
                'url': '/',
                'views': {
                    'layout': {
                        'templateUrl': 'js/app/view/Layout/index.html'
                    }
                },
                'resolve': {
                    'loadModules': ['$ocLazyLoad', function($ocLazyLoad) {
                        //console.log('loadModule');
                        return $ocLazyLoad.load(['AppController']);
                    }]
                }
            })
            .state('otherwise', {
                'url': '*path',
                'views': {
                    'layout': {
                        'templateUrl': 'js/app/view/404.html'
                    }
                },
            })
        //.state('error', {
        //    'url': '/error',
        //    'templateUrl': 'js/app/view/404.html'
        //})

        //$urlRouterProvider.otherwise('/otherwise');
    };

    function run($rootScope, $state) {
        //$state.go('index');
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            console.log(toState);
        });
    };
})();
