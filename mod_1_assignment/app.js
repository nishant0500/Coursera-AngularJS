( function(){

 'use strict';
 angular.module('LunchCheck',[])
        .controller('Lunchcheckcontroller',Lunchcheckcontroller);

 Lunchcheckcontroller.$inject=['$scope'];

 function Lunchcheckcontroller($scope) {

   $scope.items="";//defining items
      
   $scope.calculate= function (){

    var items_array = $scope.items.split(",");
    //console.log(items_array);

    var count = total_count(items_array);
    //console.log(count);

    if(count==0) {
        $scope.bttn="danger";
        $scope.result="Please enter the items.";
    }
    else if(count<=3){
        $scope.bttn="success";
        $scope.result="Enjoy!";
    }
    else {
        $scope.bttn="success";
        $scope.result="Too Much";
    }
       
   };
 }
 function total_count(string){ 
   var cnt=0;
   for(var i=0;i<string.length;i++)
   {
       if((string[i])!="")
          cnt+=1;
   }
   return cnt;
}

})();