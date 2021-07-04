(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController )

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.list="";
        $scope.message=" ";

        $scope.apply = function(){
            if($scope.list == ""){
                $scope.message="Please enter data first"
                document.getElementById('message').style.color="red"
                document.getElementById('message').style.border="solid red"
            }
            else{
                var listitem = $scope.list.split(',').length;
                if(listitem<=3){
                    $scope.message="Enjoy!"
                    document.getElementById('message').style.color="green"
                    document.getElementById('message').style.border="solid green"
                    
                }
                else{
                    $scope.message="Too much!"
                }
            }
        }
    }
})()