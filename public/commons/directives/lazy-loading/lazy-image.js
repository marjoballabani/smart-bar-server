angular
.module("commons")
.directive("lazyImage", function ($timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {
            var image = new Image();
            image.onload = function () {
                $timeout(function () {
                    scope.$apply(function () {
                        if (attributes.lazyImage && attributes.lazyImage != "") {
                            element.attr('src', attributes.lazyImage);
                        }
                    });
                });
            };
            image.src = attributes.lazyImage;
            if (image.complete) image.onload();
        }
    };
});
