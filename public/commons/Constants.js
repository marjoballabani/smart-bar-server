// var root = 'http://localhost:3000/';
var root = 'http://localhost:3000/api/';
angular
.module("commons")
.constant('Constants', {
    Url: {
        WAITERS: 'jsons/users.json',
        TABLES: root + "table",
        CATEGORIES: "jsons/categories.json",
        PRODUCTS: "jsons/products.json",
        LOGIN: root + 'login'
    }
});
