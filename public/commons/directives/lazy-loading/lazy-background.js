angular
.module("commons")
.directive("lazyBackground", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {
            var image = new Image();
            image.onload = function () {
                $timeout(function () {
                    scope.$apply(function () {
                        if (attributes.lazyBackground) {
                            element.css({ backgroundImage: 'url("' + attributes.lazyBackground + '")' });
                        }
                    });
                });
            };
            image.src = attributes.lazyBackground;
            if (image.complete) image.onload();
        }
    };
});
