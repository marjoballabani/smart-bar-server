angular
.module('app', [
    'ui.router',
    'pascalprecht.translate',
    'commons',
    'angular.filter'
])
.config(function (
    $translateProvider,
    $compileProvider
) {
    // auto-bindings to prevent using $onInit
    $compileProvider.preAssignBindingsEnabled(true);

    // Translation keys
    $translateProvider.useSanitizeValueStrategy('escaped')
    $translateProvider.preferredLanguage(window.config.defaultLang)

    // default keys / merge with congig keys
    let data = {};

    _.merge(window.langs, window.config.langs);
    _.transform(window.langs, function (result, value, key) {
        for (let k of Object.keys(value)) {
            if (!result[k]) result[k] = {};
            result[k][key] = value[k];
        }
    }, data);

    window.langs = data;

    for (let key of Object.keys(window.langs))
        $translateProvider.translations(key, window.langs[key]);


})
.run(function (

) {
    // $rootScope.Config = Config;
})
