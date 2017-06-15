function temp3Controller($scope, $window, $timeout, $http, temp2Src, callback){

	console.log(arguments);

	$scope.temp3DivStyle = {
	    "position": "relative",
	    "top":      "0px",
	    "left":     "0px",
	    "width":    $window.innerWidth+"px",
	    "height":   $window.innerHeight+"px",
	    "background-color": "skyblue",
	    "background-image": "url('images/clouds.jpg')",
	    "background-repeat": "no-repeat",
	    "background-size": "100% 100%"
	}
	$scope.temp3CityStyle = {
	    "position": "absolute",
	    "top":      "100px",
	    "left":     $window.innerWidth*.2+"px",
	    // "width":    $window.innerWidth+"px",
	    // "height":   $window.innerHeight+"px",
	    "font-size": "2em"
	}
	$scope.temp3TempStyle = {
	    "position": "absolute",
	    "top":      "200px",
	    "left":     $window.innerWidth*.2+"px",
	    // "width":    $window.innerWidth+"px",
	    // "height":   $window.innerHeight+"px",
	    "font-size": "2em"
	}

	$scope.temp3WindStyle = {
	    "position": "absolute",
	    "top":      "300px",
	    "left":     $window.innerWidth*.2+"px",
	    "font-size": "2em"
	}
	$scope.temp3WeatherStyle = {
	    "position": "absolute",
	    "top":      "400px",
	    "left":     $window.innerWidth*.2+"px",
	    "font-size": "2em"
	}


	$scope.temp3TextStyle = {
	    "position": "absolute",
	    "top":      "300px",
	    "left":     $window.innerWidth*.3+"px",
	    // "width":    $window.innerWidth+"px",
	    // "height":   $window.innerHeight+"px",
	    "font-size": "1em"
	}
	

	$scope.temp3Loading = {
	    "position": "absolute",
	    "top":      "0px",
	    "left":     "0px",
	    "width":    $window.innerWidth+"px",
	    "height":   $window.innerHeight+"px",
	    // "font-size": "1em"
	}
	

	// $scope.$apply();
	if(!$scope.$$phase) {
			$scope.$apply();
		}

	$http.get('http://api.openweathermap.org/data/2.5/weather?q=Manila&appid=29e1d90ba906e48e127efbe09126adfe').then(function(response){
		console.log(response.data);
		Typed.new(".temp3TextClass", {
			strings: ["ADASDASDGHJASGDJHGASJHDGJHGJH\nQEQWEQWEQWYUETUYQWETUYQWTEUqEEQWE","NEXT SENTENCE"],
			typeSpeed: 0,
			callback: function(){
				Typed.new(".temp3TextClass", {
					strings: ["STRING 3"],
					typeSpeed: 0,
					callback: function(){
						console.log('done');
					}
				});					}
		});
		$scope.temp3Data = {
			city: response.data.name,
			temp: (response.data.main.temp-273.15)+" Celcius",
			windSpeed: (response.data.wind.speed)+" meters/second",
			weatherMain: response.data.weather[0].main,
			weatherDesc: response.data.weather[0].description
		}
		console.log($scope.temp3Data);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
		else{
			console.log('fail apply');
		}
		// $scope.$apply();
		// $timeout(function(){}, 10);
	},
	function(error){
		console.log(error);
	});
	
// $scope.$apply();
// $scope.$apply();
// console.log('timeout');

	// $timeout(function(){
	// 	$timeout(function(){
	// 		$http.get('http://api.openweathermap.org/data/2.5/weather?q=Manila&appid=29e1d90ba906e48e127efbe09126adfe').then(function(response){
	// 			console.log(response.data);
	// 			Typed.new(".temp3TextClass", {
	// 				strings: ["ADASDASDGHJASGDJHGASJHDGJHGJH\nQEQWEQWEQWYUETUYQWETUYQWTEUqEEQWE","NEXT SENTENCE"],
	// 				typeSpeed: 0,
	// 				callback: function(){
	// 					Typed.new(".temp3TextClass", {
	// 						strings: ["STRING 3"],
	// 						typeSpeed: 0,
	// 						callback: function(){
	// 							console.log('done');
	// 						}
	// 					});					}
	// 			});
	// 			$scope.temp3Data = {
	// 				city: response.data.name,
	// 				temp: response.data.main.temp-273.15
	// 			}
	// 			$timeout(function(){}, 10);
	// 		},
	// 		function(error){
	// 			console.log(error);
	// 		});
	// 	}, 10);
	// }, 10);

	

	$timeout(callback, 10000);
}