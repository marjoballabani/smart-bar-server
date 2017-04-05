/**
 * Created by Marjo on 1/5/2016.
 */
angular
.module("commons")
.factory('DataFactory', function (
    Http,
    Constants
) {
    var dataFactory = {};
    dataFactory.selectedWaiter = {};
    dataFactory.selectedTable = {};
    dataFactory.waiters = [];
    dataFactory.tables = [];
    dataFactory.categories = [];
    dataFactory.mainColor = {
        color: '#4caf50',
        class: 'btn-success'
    };

    dataFactory.login = (data, success, error) => {
        Http.POST(Constants.Url.LOGIN, data, success, error);
    };

    dataFactory.getWaiters = (success, error) => {
        Http.GET(Constants.Url.WAITERS, {}, success, error)
    };

    dataFactory.getTables = (success, error) => {
        Http.GET(Constants.Url.TABLES, {}, success, error)
    };

    dataFactory.getCategories = (success, error) => {
        Http.GET(Constants.Url.CATEGORIES, {}, success, error)
    };

    dataFactory.getProducts = (success, error) => {
        Http.GET(Constants.Url.PRODUCTS, {}, success, error)
    };

    /**
     * Main load function that is resolvewd on app state
     */
    dataFactory.load = () => {
        // load tables
        dataFactory.getTables((success) => {
            dataFactory.tables = success.data;
        }, (error) => {
            console.log(error)
        });

        // load categories
        dataFactory.getCategories((success) => {
            dataFactory.categories = success.data;
        }, (error) => {
            console.log(error)
        });

        // load products
        dataFactory.getProducts(function (success) {
            dataFactory.products = success.data;
        }, (error) => {
            console.log(error)
        });
    }


    return dataFactory;
});
