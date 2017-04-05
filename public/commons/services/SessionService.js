angular
.module('commons')
.service('SessionService', function (
    $q,
    LocalStorage
) {
    this.user = null;

    this.setToken = (token) => {
        LocalStorage.set('userToken', token);
    }

    this.getToken = () => {
        let token = LocalStorage.get('userToken');
        return token;
    }

    this.setUser = (user) => {
        LocalStorage.set('user', user);
    }

    this.getUser = () => {
        let user = LocalStorage.get('user');
        return user;
    }

    this.isLogged = function () {
        let defer = $q.defer()

        if (LocalStorage.get('userToken'))
            defer.resolve();
        else
            defer.reject();

        return defer.promise;
    }

    this.logOut = function () {
        LocalStorage.clear();
    }

    this.setUserId = function (userId) {
        LocalStorage.set('userId', userId);
    }

    this.getUserId = function () {
        return LocalStorage.get('userId');
    }
})
