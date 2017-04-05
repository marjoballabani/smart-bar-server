angular
.module("app")
.config(function ($httpProvider) {
    $httpProvider
        .interceptors
        .push(function ($q, $state, SessionService) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if (SessionService.getToken()) {
                        config.headers['x-access-token'] = SessionService.getToken();
                    }
                    return config;
                },
                'responseError': function (response) {
                    if (response.status === 403) {
                        // response.message == 401 means that was sent an authorized request
                        if (SessionService.getToken()) {
                            delete SessionService.logOut();
                        }
                        $state.go('auth.login');
                    }
                    return $q.reject(response);
                }
            };
        });
});
