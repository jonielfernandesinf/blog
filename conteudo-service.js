angular.module('conteudoServiceApp', [])
    .service('ConteudoService', conteudoService);

function conteudoService($http) {

    var ENDERECO_BACKEND = 'https://ng-curso-api.herokuapp.com/conteudos';

    return {
        listar: function() {

            return $http.get(ENDERECO_BACKEND);
        },
        porId: function(id) {

            return $http.get(ENDERECO_BACKEND + '/id', {params:{id: id}});
        }
    }
}