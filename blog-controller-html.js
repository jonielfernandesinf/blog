angular
    .module('app')
    .controller('BlogControllerHTML', blogController);

blogController.$inject = ['$scope', 'ConteudoService'];

function blogController($scope, conteudoService){
    $scope.conteudos = [];
    conteudoService.porId(24).then(function(response){
        $scope.conteudos.push(response.data);
    });
}