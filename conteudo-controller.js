angular
    .module('app')
    .controller('BlogController', blogController);

blogController.$inject = ['$scope', 'ConteudoService'];

function blogController($scope, conteudoService){
    conteudoService.listar().then(function(response){
        $scope.conteudos = response.data;
    });
}