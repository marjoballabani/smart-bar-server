angular
.module('app')
.component('bar', {
    bindings: {
        logout: '&'
    },
    templateUrl: 'app/bar-manager/bar-manager.html',
    controller: function (
        $scope,
        DataFactory
    ) {
        console.log('barManager controller started');
        this.selectedTable = DataFactory.selectedTable;
        this.selectedWaiter = DataFactory.selectedWaiter;
        this.categories = DataFactory.categories;
        this.tempProducts = [];
        this.products = DataFactory.products;
        this.selectedProduct = null;
        this.mainColor = DataFactory.mainColor;
        this.total = 0;
        this.bill = []

        this.tempBill = {
            name: '',
            count: 1,
            total: 0
        };

        /**
         * Chose a product and put it into the bill
         *
         * @param product
         */
        this.choseProduct = function (product) {
            var found = false;
            var i = 0;
            var pos = 0;
            while (i < this.bill.length) {
                if (product.name == this.bill[i].name) {
                    found = true;
                    pos = i;
                }
                i++;
            }
            if (found) {
                this.bill[pos].count += 1;
                this.bill[pos].total = this.bill[pos].count * product.price;
                this.total += parseInt(this.bill[pos].total);
            } else {
                this.tempBill.name = product.name;
                this.tempBill.count = 1;
                this.tempBill.total = product.price;
                this.total += parseInt(product.price);
                this.bill.push(this.tempBill);
                this.tempBill = {
                    name: '',
                    count: 1,
                    total: 0
                };
            }
        };

        /**
         * Select a product from bill table
         * @param product
         */
        this.selectBillProduct = function (product) {
            this.selectedProduct = product;
        };

        /**
         * rise up or discount a selected product number from bill
         * @param isRise
         */
        this.countSelectedProduct = function (isRise) {
            var price = this.bill[this.selectedProduct].total / this.bill[this.selectedProduct].count;
            if (isRise) {
                this.bill[this.selectedProduct].count++;
                this.bill[this.selectedProduct].total = parseInt(this.bill[this.selectedProduct].total) + price;
                this.total += price;
            } else {
                this.bill[this.selectedProduct].count--;
                this.bill[this.selectedProduct].total = parseInt(this.bill[this.selectedProduct].total) - price;
                this.total -= price;
            }
        };

        /**
         * Delete a product from bill
         */
        this.deleteBillProduct = function () {
            this.bill.splice(this.selectedProduct, 1);
            this.selectedProduct = null
        };

        /**
         * Select a product category
         * @param categoryId
         */
        this.selectCategory = function (categoryId) {
            var tempProducts = [];
            for (var i = 0; i < DataFactory.products.length; i++) {
                if (this.products[i].categoryId == categoryId) {
                    tempProducts.push(DataFactory.products[i]);
                }
            }
            this.tempProducts = tempProducts;
        };

        this.scrollbarConfig = {
            scrollButtons: {
                scrollAmount: 'auto', // scroll amount when button pressed
                enable: true // enable scrolling buttons by default
            },
            scrollInertia: 400, // adjust however you want
            axis: 'y', // enable 2 axis scrollbars by default,
            theme: 'dark',
            autoHideScrollbar: true
        };
    }
});
