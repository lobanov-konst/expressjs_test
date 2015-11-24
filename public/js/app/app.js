(function() {
    var dependences = [
        'ui.router',
        'oc.lazyLoad',
        'uiRouterStyles'
    ];
    angular
        .module('app', dependences)
        .config(config)
        .run(run);

    config.$inject = ['$interpolateProvider', '$stateProvider', '$ocLazyLoadProvider', '$locationProvider', '$urlRouterProvider'];
    run.$inject = ['$rootScope', '$state'];

    function config($interpolateProvider, $stateProvider, $ocLazyLoadProvider, $locationProvider, $urlRouterProvider) {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $locationProvider.hashPrefix('!');
        $ocLazyLoadProvider.config({
            //'debug': true,
            'modules': [
                {'name': 'AppController', 'files': ['/js/app/controllers/AppController.js']},
                {'name': 'FSTOController', 'files': ['/js/app/modules/fsto/controllers/FSTOController.js']},
            ]
        });
        $stateProvider
            .state('base', {
                'abstract': true,
                'views': {
                    'layout': {
                        'templateUrl': 'js/app/view/Layout/default.html'
                    }
                },
                'resolve': {
                    'loadModules': ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['AppController']);
                    }]
                }
            })
            .state('index', {
                'parent': 'base',
                'url': '/',
                'data': {
                    'css': []
                },
                'views': {
                    'inner-block': {
                        'templateUrl': 'js/app/view/index.html'
                    }
                },
                'resolve': {
                    'loadModules': ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['AppController']);
                    }]
                }
            })
            .state('fsto', {
                'parent': 'base',
                'url': '/fsto',
                'data': {
                    'css': []
                },
                'views': {
                    'inner-block': {
                        'templateUrl': 'js/app/modules/fsto/view/index.html'
                    }
                },
                'resolve': {
                    'loadModules': ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['FSTOController']);
                    }]
                }
            })
            .state('otherwise', {
                'url': '*path',
                'data': {
                    'css': ['css/404.css']
                },
                'views': {
                    'layout': {
                        'templateUrl': 'js/app/view/404.html'
                    }
                },
            })
    };

    function run($rootScope, $state) {
        //$state.go('index');
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            //console.log(toState);
        });
    };
})();
