var app = angular.module('RestApp', []);

app.controller('RestCtrl', function($scope, $http, $log) {
	'use strict';
	
	$scope.listaAutomobila = [];
	$scope.auto = {};
	
	$scope.resetInput = function(){
		$scope.marka = '';
		$scope.model = '';
		$scope.godiste = '';
		$scope.kubikaza = '';
		$scope.boja = '';
		$scope.cena = '';
		$scope.auto_id = '';
		$scope.auto_id_info = '';
		$scope.novaMarka = '';
	};
	
	// (CRUD za Java Web Servis)
	
	// http://localhost:8080/REST_WS_Java/rest_api/auto
	
	$scope.ucitajListuAutomobila = function(){
		$http.get("http://localhost:8080/REST_WS_Java/rest_api/auto").then(function(response) {
			$scope.listaAutomobila = response.data;
			$scope.resetInput();
        	$log.info(response.data + ' ' + response.status);
    	});
	};
	
	// http://localhost:8080/REST_WS_Java/rest_api/auto/id/{auto_id}
	
	/*$scope.ucitajAuto = function(){
		$http.get("http://localhost:8080/REST_WS_Java/rest_api/auto" + $scope.auto_id_info).then(function(response) {
			$scope.auto = response.data;
			$scope.resetInput();
        	$log.info(response.data + ' ' + response.status);
    	});
	};*/
	
	// http://localhost:8080/REST_WS_Java/rest_api/auto
	
	$scope.sacuvajAuto = function(){
		var parametri = {
					method: 'POST',
					url: 'http://localhost:8080/REST_WS_Java/rest_api/auto',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					data: 'marka=' + $scope.marka + '&model=' + $scope.model + '&godiste=' + $scope.godiste + 								'&kubikaza=' + $scope.kubikaza + '&boja=' + $scope.boja + '&cena=' + $scope.cena
				};
				
		$http(parametri).then(function(response) {
        	$scope.ucitajListuAutomobila();
			$log.info(response.data + ' ' + response.status);
    	});
	};
	
	// http://localhost:8080/REST_WS_Java/rest_api/auto/id/{auto_id}/marka/{marka}
	
	$scope.izmeniAuto = function(){
		$http.put("http://localhost:8080/REST_WS_Java/rest_api/auto/id/" + $scope.auto_id + "/marka/" + $scope.novaMarka)
		.then(function(response) {
        	$scope.ucitajListuAutomobila();
			$scope.resetInput();
			$log.info(response.data + ' ' + response.status);
    	});
	};
	
	// http://localhost:8080/REST_WS_Java/rest_api/auto/marka/{marka}
	
	/*$scope.izbrisiAuto = function(index){
		
		var marka = $scope.listaAutomobila[index].marka;
		
		$http.delete("http://localhost:8080/REST_WS_Java/rest_api/auto/" + marka ).then(function(response) {
        	$scope.ucitajListuAutomobila();
			$log.info(response.data + ' ' + response.status);
    	});
	};*/

	// (CRUD za PHP Web Servis)
		
	// http://localhost/REST_WS_PHP/rest_api/auto/lista
	
	/*$scope.ucitajListuAutomobila = function(){
		$http.get("http://localhost/REST_WS_PHP/rest_api/auto/lista").then(function(response) {
			$scope.listaAutomobila = response.data;
			$scope.resetInput();
        	$log.info(response.data + ' ' + response.status);
    	});
	};*/
	
	// http://localhost/REST_WS_PHP/rest_api/auto/id/$1
	
	$scope.ucitajAuto = function(){
		$http.get("http://localhost/REST_WS_PHP/rest_api/auto/id/" + $scope.auto_id_info)
			.then(function(response) {
				$scope.auto = response.data;
				$scope.resetInput();
				$log.info(response.data + ' ' + response.status);
    	});
	};
	
	// http://localhost/REST_WS_PHP/rest_api/auto
	
	/*$scope.sacuvajAuto = function(){
		$http.post("http://localhost/REST_WS_PHP/rest_api/auto", 
		{
			"marka": $scope.marka,
			"model": $scope.model,
			"godiste": $scope.godiste,
			"kubikaza": $scope.kubikaza,
			"boja": $scope.boja,
			"cena": $scope.cena
		}).then(function(response) {
        	$scope.ucitajListuAutomobila();
			$log.info(response.data + ' ' + response.status);
    	});
	};*/
	
	// http://localhost/REST_WS_PHP/rest_api/auto
	
	/*$scope.izmeniAuto = function(){
		$http.put("http://localhost/REST_WS_PHP/rest_api/auto/",
		{
			"auto_id": $scope.auto_id,
			"marka": $scope.novaMarka
		}).then(function(response) {
        	$scope.ucitajListuAutomobila();
			$log.info(response.data + ' ' + response.status);
    	});
	};*/
	
	// http://localhost/REST_WS_PHP/rest_api/auto/id/$1
	
	$scope.izbrisiAuto = function(index){
		
		var auto_id = $scope.listaAutomobila[index].auto_id;
		
		$http.delete("http://localhost/REST_WS_PHP/rest_api/auto/id/" + auto_id).then(function(response) {
        	$scope.ucitajListuAutomobila();
			$log.info(response.data + ' ' + response.status);
    	});
	};
});