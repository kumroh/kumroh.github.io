 angular.module('myAppModule',[])
 .controller('appCtrl',['$scope',  function($scope){
 	$scope.myData = "new Data is here"; 
 	var myStates= {};
 
$scope.states = function(){
	var st=  [
{id:"1","name":"Delhi"},
{id:"2","name":"Chandigarh"},
{id:"3","name":"Punjab"}
];

for(var i=1;i<=st.length;i++){
 if($scope.selectedValue && 
 	$scope.selectedValue.id == st[i]["id"]){
 		$scope.selectedValue = st[i];
 	break;
 }else if(i===st.length){
  $scope.selectedValue = st[0];
 }
}

return st;
 
};

 }]);
