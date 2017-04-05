angular
    .module('app')
    .config(function (
        $stateProvider
    ) {
        $stateProvider
            .state('auth', {
                abstract: true,
                templateUrl: "app/auth/auth.html",
                controllerAs: "AuthCtrl",
                resolve: {
                    checkSession: function ($state, SessionService) {
                        return SessionService.isLogged()
                        .then(function () {
                            console.log("login")
                            $state.go('app.tables');
                        })
                        .catch(() => {

                        })
                    },

                },
                controller: function (
                    $state
                ) {
                    this.logout = function () {
                        $state.go('auth.login')
                    }
                    return this;
                }
            })
            .state('auth.login', {
                url: "/login",
                templateUrl: "app/auth/login.html",
                controllerAs: "$ctrl",
                resolve: {
                    _waiters: function (DataFactory) {
                        DataFactory.getWaiters((success) => {
                            DataFactory.waiters = success.data;
                            return DataFactory.waiters
                        }, (error) => {
                            console.log(error)
                        });
                    },
                    _logOut: function (SessionService) {
                        return SessionService.logOut;
                    }
                },
                controller: function (
                    DataFactory,
                    SessionService,
                    $state
                ) {
                    console.log('login controller started');
                    this.password = "";
                    this.selectedWaiter = DataFactory.selectedWaiter;
                    this.waiters = DataFactory.waiters;

                    /**
                     * On password button click
                     * @param value
                     */
                    this.appendPass = function (value) {
                        this.password += value;
                    };

                    /**
                     * Get waiters from dataFactory
                     */
                    this.getWaiters = function () {
                        this.waiters = DataFactory.waiters;
                    };

                    this.clean = function () {
                        this.password = this.password.slice(0, -1);
                    };

                    /**
                     * Select user
                     *
                     * @param waiter
                     */
                    this.selectWaiter = function (waiter) {
                        this.selectedWaiter = DataFactory.selectedWaiter = waiter;
                    };

                    /**
                     * Log in
                     */
                    this.login = function () {
                        var data = {
                            username: this.selectedWaiter.username,
                            password: this.password
                        };
                        DataFactory.login(data, function (success)  {
                            if (!success.data.success) {
                                alert(success.message);
                            } else {
                                SessionService.setToken(success.data.token)
                                SessionService.setUser(success.data.data)
                                this.selectedWaiter = DataFactory.selectedWaiter = success.data.data;
                                $state.go("app.tables")

                            }
                        }, (error) => {
                            console.log(error)
                        });
                    }
                }
            })
            .state('auth.register', {
                url: "/register",
                templateUrl: "app/auth/register.html",
                controllerAs: "$ctrl",
                controller: function (
                ) {
                    this.register = function () {
                    }
                    return this;
                }
            })


    })
