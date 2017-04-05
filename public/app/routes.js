angular.module('app')
.config(function (
    $stateProvider,
    $urlRouterProvider
) {

    $urlRouterProvider.otherwise('/login')

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: 'app/app.html',
            controllerAs: '$ctrl',
            resolve: {
                _config: function (DataFactory) {
                    DataFactory.load();
                },
                _checkSession: function ($state, SessionService) {
                    return SessionService.isLogged()
                        .then(function () {})
                        .catch(() => {
                            $state.go("auth.login")
                        })
                }
            },
            controller: function (
                $state
            ) {

                this.logout = function () {
                    $state.go('auth.login')
                }
            }
        })
        .state('app.tables', {
            url: '/tables',
            abstract: false,
            component: "tables"
        })
        .state('app.bar', {
            url: '/bar',
            abstract: false,
            component: "bar"
        })

})
