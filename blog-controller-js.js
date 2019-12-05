angular
    .module('app')
    .controller('BlogControllerJS', blogController);

blogController.$inject = ['$scope', 'ConteudoService'];

function blogController($scope, conteudoService){
    $scope.conteudos = [];
    conteudoService.porId(26).then(function(response){
        $scope.conteudos.push(response.data);
    });
}