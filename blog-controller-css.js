angular
    .module('app')
    .controller('BlogControllerCSS', blogController);

blogController.$inject = ['$scope', 'ConteudoService'];

function blogController($scope, conteudoService){
    $scope.conteudos = [];
    conteudoService.porId(25).then(function(response){
        $scope.conteudos.push(response.data);
    });
}