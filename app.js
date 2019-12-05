angular
    .module('app', ['ngRoute', 'conteudoServiceApp'])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.

    when('/', {
        controller: 'BlogControllerHTML',
        templateUrl: 'conteudo-HTML.tpl.html'
    }).

    when('/html', {
        controller: 'BlogControllerHTML',
        templateUrl: 'conteudo-HTML.tpl.html'
    }).

    when('/css', {
        controller: 'BlogControllerCSS',
        templateUrl: 'conteudo-CSS.tpl.html'
    }).

    when('/javascript', {
        controller: 'BlogControllerJS',
        templateUrl: 'conteudo-Javascript.tpl.html'
    }).

    otherwise({ redirectTo: '/' });

}