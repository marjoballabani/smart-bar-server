angular
.module("commons")
.filter('readMore', function () {
    return function (text, full) {
        if (text == undefined || (text && text.length <= 28) || full) {
            return text;
        } else {
            return `${text.substr(0, 28)}...`
        }
    }
});
