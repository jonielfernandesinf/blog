angular
    .module('app', ['ngRoute', 'conteudoServiceApp'])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.

    when('/', {
        controller: 'BlogController',
        templateUrl: 'conteudo-HTML-tpl.html'
    }).

    when('/html', {
        controller: 'BlogController',
        templateUrl: 'conteudo-HTML-tpl.html'
    }).

    when('/css', {
        controller: 'BlogController',
        templateUrl: 'conteudo-CSS-tpl.html'
    }).

    when('/javascript', {
        controller: 'BlogController',
        templateUrl: 'conteudo-Javascript-tpl.html'
    }).

    otherwise({ redirectTo: '/' });

}