(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [{
			name: 'Dodecahedron',
			price: 2,
			description: 'Here is a brief description of the product. Blah Blah Blah', 
			canPurchase: true,
			soldOut: false,
			images: [
				"img/dodecahedron.JPG"
			],
			reviews: [{
		        stars: 3,
		        body: "I think this gem was just OK, could honestly use more shine, IMO.",
		        author: "JimmyDean@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 4,
		        body: "Any gem with 12 faces is for me!",
		        author: "gemsRock@example.org",
		        createdOn: 1397490980837
		      }]
		},{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Here is another brief description of the product. Blah Blah Blah',
			canPurchase: true,
			soldOut: false,
			images: [
				"img/pentagon.gif"
			],
			reviews: [
				{
					stars: 1,
					body: "This product is not so great",
					author: "notgood@booooo.com",
					createdOn: 1397490980837
				}
			],
		}
	];
})();