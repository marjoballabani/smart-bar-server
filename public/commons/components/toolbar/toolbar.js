angular
.module('commons')
.component('toolbar', {
    bindings: {
        logout: '&'
    },
    templateUrl: 'commons/components/toolbar/toolbar.html',
    controller: function (
        $scope,
        $rootScope,
        DataFactory,
        $state,
        SessionService
    ) {
        console.log('mainController started');
        this.selectedTable = DataFactory.selectedTable;
        this.selectedView = {
            template: 'templates/tables.html'
        };

        /**
         * Logout
         */
        this.logOut = () => {
            SessionService.logOut();
            $state.go('auth.login');
        };

        /**
         * Table state
         */
        this.goToTables = () => {
            $state.go("app.tables")
        }

        /**
         * TODO - Depricated
         */
        this.minimize = () => {
            var remote = require('remote');
            var window = remote.getCurrentWindow();
            window.minimize();
        };

        /**
         * TODO - Depricated
         */
        this.close = () => {
            var remote = require('remote');
            var window = remote.getCurrentWindow();
            window.close();
        };

    }
});
