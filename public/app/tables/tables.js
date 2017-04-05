angular
.module('app')
.component('tables', {
    templateUrl: 'app/tables/tables.html',
    controller: function (
        $scope,
        $rootScope,
        DataFactory,
        $state
    ) {
        console.log('mainController started');
        DataFactory.getTables((success) => {
            this.tables = DataFactory.tables = success.data;
        }, (error) => {
            console.log(error)
        });
        this.tables = DataFactory.tables;

        /**
         * Select a table
         * @param table
         */
        this.selectTable = (table) => {
            DataFactory.selectedTable = table;
            if (table.status == 1) {
                DataFactory.mainColor = {
                    color: '#4caf50',
                    class: 'btn-success'
                };
            } else {
                DataFactory.mainColor = {
                    color: '#ff5722',
                    class: 'btn-warning'
                };
            }
            $state.go('app.bar', []);
        }

    }
});
