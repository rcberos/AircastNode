function temp1Controller($scope, $window, $timeout, $http, temp1Src, callback){
// 	$scope.testing = function(){
// 		console.log('asdasdasdasd');
// 		$window.alert($window.innerWidth);
// 	}
	var widthMultiplier = 0.75;
	var heightMultiplier = 0.75;
	$scope.temp1VideoStyle = {
	    "position": "absolute",
	    "top":      "0px",
	    "left":     "0px",
	    "width":    $window.innerWidth*widthMultiplier+"px",
	    "height":   $window.innerHeight*heightMultiplier+"px",
	    "background-color": "black"
	}
	$scope.temp1BottomStyle = {
	    "position": "absolute",
	    "top":      $window.innerHeight*heightMultiplier+"px",
	    "left":     "0px",
	    "width":    $window.innerWidth*widthMultiplier+"px",
	    "height":   $window.innerHeight*(1-heightMultiplier)+"px",
	    "background-color": "yellow"
	}
	$scope.temp1Side1Style = {
	    "position": "absolute",
	    "top":      "0px",
	    "left":     $window.innerWidth*widthMultiplier+"px",
	    "width":    $window.innerWidth*(1-widthMultiplier)+"px",
	    "height":   $window.innerHeight*0.33+"px",
	    "background-color": "green"
	}
	$scope.temp1Side2Style = {
	    "position": "absolute",
	    "top":      $window.innerHeight*0.33+"px",
	    "left":     $window.innerWidth*widthMultiplier+"px",
	    "width":    $window.innerWidth*(1-widthMultiplier)+"px",
	    "height":   $window.innerHeight*0.33+"px",
	    "background-color": "orange"
	}
	$scope.temp1Side3Style = {
	    "position": "absolute",
	    "top":      $window.innerHeight*0.66+"px",
	    "left":     $window.innerWidth*widthMultiplier+"px",
	    "width":    $window.innerWidth*(1-widthMultiplier)+"px",
	    "height":   $window.innerHeight*0.34+"px",
	    "background-color": "white"
	}

	$scope.temp1Src = {
		// video: temp1Src.video,
		side1: temp1Src.side1,
		side2: temp1Src.side2,
		side3: temp1Src.side3,
		bottom: temp1Src.bottom
	}

	// $timeout(function(){}, 10);

	// var videoElements = angular.element(document.getElementById('temp1Video'));
	// console.log(videoElements);
 //    videoElements[0].play();

 	var vidCtr = 0;
 //    $timeout(function(){
	// 	$timeout(function(){
	// 		temp1VideoPlay();
	// 	}, 10);
	// }, 10);

	$scope.$apply();
    
    console.log('hello');
	function temp1VideoPlay(){
		$scope.temp1Src.video = temp1Src.video;
		$scope.$apply();
		vidCtr++;
		var videoElements = angular.element(document.getElementById('temp1Video'));
	    		videoElements[0].play();
		// $timeout(function(){
		// 	// var videoElements = angular.element(document.getElementById('temp1Video'));
	 //  //   		videoElements[0].play();

		// 	$timeout(function(){
		// 		var videoElements = angular.element(document.getElementById('temp1Video'));
	 //    		videoElements[0].play();
		// 	}, 10);
		// }, 10);
		
	}

	  

	$scope.temp1VideoEnd = function(){
		// if(vidCtr<temp1Src.video.length)
		// 	temp1VideoPlay();
		// else
			callback();
	}

	temp1VideoPlay();
}