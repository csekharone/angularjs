var app = angular.module('eShop', []);

angular.module('eShop').controller('MainController', ['$scope', function($scope){
	$scope.siteName = 'eShop';
	$scope.basePath = "C:\Users\CSekharOne\Documents\AngularJS\Project1\EShop";
	$scope.a = 0;
	$scope.b = 0;

	$scope.addMe = function(){
		return parseInt($scope.a) + parseInt($scope.b);
	};
	$scope.slider = {
			"mediaPath" : '\/images\/topbanner\/',
		    "items": [
		        {"src": "C:\\Users\\CSekharOne\\Documents\\AngularJS\\Project1\\EShop\\images\\topbanner\\topbanner1.jpg", "alt": "Mens Apparel"},
		        {"src": "C:\\Users\\CSekharOne\\Documents\\AngularJS\\Project1\\EShop\\images\\topbanner\\topbanner2.jpg", "alt": "Mens Accessories"},
		        {"src": "C:\\Users\\CSekharOne\\Documents\\AngularJS\\Project1\\EShop\\images\\topbanner\\topbanner3.jpg", "alt": "Womens Apparel"},
		        {"src": "C:\\Users\\CSekharOne\\Documents\\AngularJS\\Project1\\EShop\\images\\topbanner\\topbanner4.jpg", "alt": "Women Accessries"},
		        {"src": "C:\\Users\\CSekharOne\\Documents\\AngularJS\\Project1\\EShop\\images\\topbanner\\topbanner5.jpg", "alt": "Kids Apparel"},
		        {"src": "C:\\Users\\CSekharOne\\Documents\\AngularJS\\Project1\\EShop\\images\\topbanner\\topbanner6.jpg", "alt": "Kids Accessories"},
		    ]
	}
}]);
//Top Menu Controller
angular.module('eShop').controller('TopMenuController', ['$scope', function($scope){
	$scope.topMenuCategory = [
		{id : 121, name : "About", url : "about"}, 
		{id : 122, name : 'Services', url : 'services'}, 
		{id : 123, name : 'Contact', url : 'contact'}
	];

}])

//Left Menu Controller
angular.module('eShop').controller('LeftMenuController', ['$scope','eShopService', function($scope, eShopService){
	$scope.leftMenu = {
		"menu": {
		    "header": "eShop Menu",
		    "items": [
		        {"id": "Men", "label": "Mens Apparel"},
		        {"id": "MenAssesories", "label": "Mens Accessories"},
		        {"id": "Women", "label": "Womens Apparel"},
		        {"id": "WomenAccessories", "label": "Women Accessries"},
		        {"id": "Kids", "label": "Kids Apparel"},
		        {"id": "KidsAccessories", "label": "Kids Accessories"},
		    ]
		}
	};

	eShopService.getMainMenu().then(function (response) {
		console.log(response);
	})

}])

angular.module('eShop').service('eShopService', ['$http', function($http){

	this.getMainMenu = function(){
		// Simple GET request example :
		return $http.get('http://localhost/EShop/json/MainMenu.json');
	}

	//this.getMensCategory

	//this.getWomensCategory
	
	//this.getKidsCategory

}])

