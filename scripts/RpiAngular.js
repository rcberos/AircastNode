var app = angular.module('MainModule', ['ui.bootstrap', 'ui.event', 'ngAnimate']);

app.controller('MainController', function($scope, $http, $interval, $timeout, $window){
  // $window.alert('W: '+$window.innerWidth+' H: '+$window.innerHeight);

  

  $scope.mainDiv = {
    "position": "relative",
    "top":      "0px",
    "left":     "0px",
    "width":    $window.innerWidth+"px",
    "height":   $window.innerHeight+"px",
    "background-color": "black"
  }


  $scope.templates = [];

  // var payload = {
  //   CampaignID: 1,
  //   tempHtml: 'templates/temp5.html',
  //   tempSrc: {
  //               video: "images/guardian.mp4",
  //               side1: "",
  //               side2: "images/fedsix.jpg",
  //               side3: "",
  //               bottom: "images/fed.png",
  //             },
  //   tempJs: 'scripts/temp5.js',
  //   tempInit: 'temp5Controller'
  // }

  // $scope.templates.push(payload);



    var payload = {
    CampaignID: 2,
    tempHtml: 'templates/temp1.html',
    tempSrc: {
                video: "images/audition.mp4",
                side1: "images/side1.jpg",
                side2: "images/side1.jpg",
                side3: "images/side1.jpg",
                bottom: "images/bottom.jpg",
              },
    tempJs: 'scripts/temp1.js',
    tempInit: 'temp1Controller'
  }

  $scope.templates.push(payload);

  // var payload = {
  //   CampaignID: 3,
  //   tempHtml: 'templates/temp4.html',
  //   tempSrc: {
  //     gif: "images/traffic_forecast.jpg"
  //             },
  //   tempJs: 'scripts/temp4.js',
  //   tempInit: 'temp4Controller'
  // }

  // $scope.templates.push(payload);

  // var payload = {
  //   tempHtml: 'templates/temp2.html',
  //   tempSrc: {
  //               video: "images/guardian.mp4",
  //               // video: "images/Jollibee_VIDEO_201.mp4",
  //             },
  //   tempJs: 'scripts/temp2.js',
  //   tempInit: 'temp2Controller'
  // }

  // $scope.templates.push(payload);

  // var payload = {
  //   tempHtml: 'templates/temp4.html',
  //   tempSrc: {
  //     gif: "images/dolphin.gif"
  //             },
  //   tempJs: 'scripts/temp4.js',
  //   tempInit: 'temp4Controller'
  // }

  // $scope.templates.push(payload);

  // var payload = {
  //   tempHtml: 'templates/temp3.html',
  //   tempSrc: {
  //             },
  //   tempJs: 'scripts/temp3.js',
  //   tempInit: 'temp3Controller'
  // }

  // $scope.templates.push(payload);


  // var payload = {
  //   tempHtml: 'templates/temp2.html',
  //   tempSrc: {
  //               video: "images/JOLLIBEE_VIDEO_176.mp4",
  //               // video: "images/Jollibee_VIDEO_201.mp4",
  //             },
  //   tempJs: 'scripts/temp2.js',
  //   tempInit: 'temp2Controller'
  // }

  // $scope.templates.push(payload);





  




  

  



  // var payload = {
  //   tempHtml: 'templates/temp2.html',
  //   tempSrc: {
  //               // video: "images/Jollibee_VIDEO_201.mp4",
  //               // video: "images/JOLLIBEE_VIDEO_176.mp4",
  //               video: "images/audition.mp4",
  //             },
  //   tempJs: 'scripts/temp2.js',
  //   tempInit: 'temp2Controller'
  // }

  // $scope.templates.push(payload);

  $scope.currentCampaignID = 0;

  
  var isStart = true;
  $scope.templatePosition = 0;
  $scope.templateShuffle = function(){
    console.log($scope.templates);
    // if($scope.templatePosition == $scope.templates.length-1){
    //   $scope.templatePosition = 0;
    // }
    // else if(isStart){
    //   isStart = false;
    // }
    // else{
    //   $scope.templatePosition++;
    // }

    var tempEnable = 1;
    for(var i=0; i<$scope.templates.length; i++){
      if($scope.templates[i].CampaignID>$scope.currentCampaignID){
        tempEnable = 0;
        var playingTemplate = $scope.templates[i];
        $scope.currentCampaignID = $scope.templates[i].CampaignID;
        break;
      }
    }
    if(tempEnable){
      var playingTemplate = $scope.templates[0];
      $scope.currentCampaignID = $scope.templates[0].CampaignID;
    }

    console.log(playingTemplate);

    console.log('aweawea');
    console.log(playingTemplate.tempSrc);

    $scope.tempUrl = playingTemplate.tempHtml;
    requirejs([playingTemplate.tempJs],function(){
      // console.log($scope.templatePosition);
      var tempNameSpace = {
        '$scope': $scope,
        '$window': $window,
        '$timeout': $timeout,
        '$http': $http,
        'source': playingTemplate.tempSrc,
        "callback": $scope.templateShuffle,
      };
      // tempNameSpace['$scope'] = 'asdasd';
      var ttt = '$scope';
      console.log(tempNameSpace[ttt]);


      var payl2 = [tempNameSpace['$scope'], tempNameSpace['$window'], tempNameSpace['$timeout'], tempNameSpace['$http'], tempNameSpace['source'], tempNameSpace['callback']];
      var payl = [$scope, $window, $timeout, $http, playingTemplate.tempSrc, $scope.templateShuffle];
      // var fffs = "asd"
      // var oNew = Object.create(this.prototype);
      // temp3Controller.apply(null, payl);
      window[playingTemplate.tempInit].apply(null, payl2);
    });
  }

  $scope.templateShuffle();


  $scope.getTemplates = function(){
    $http.get('config/default.json').then(function(response){
      console.log('default');
      console.log(response.data);
      var RpiID = response.data.RpiID;

      var data = {
        RpiID: RpiID
      }
      $http.post('http://54.254.248.115/rpiGetCampaigns', data).then(function(response){
        var newTemplates = response.data;
        console.log(newTemplates);
        if(newTemplates.length != 0){
          if($scope.templates.length!=newTemplates.length){
            $scope.templates = newTemplates;
          }
          else{
            for(var i=0; i<$scope.templates.length; i++){
              if($scope.templates[i].CampaignID != newTemplates[i].CampaignID){
                $scope.templates = newTemplates;
                break;
              }
            }
          }
        }
          
        if(!$scope.$$phase) {
          $scope.$apply();
        }
        console.log($scope.templates);
        $timeout(function(){$scope.getTemplates();}, 5000);
      }, function(err){
        console.log(err);
      });

    });

      
  }

  $scope.getTemplates();


});