(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Here is a brief description of the product. Blah Blah Blah', 
			canPurchase: true,
			soldOut: false,
			images: [
				"img/dodecahedron.JPG"
			],
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Here is another brief description of the product. Blah Blah Blah',
			canPurchase: true,
			soldOut: false,
			images: [
				"img/pentagon.gif"
			],
		}
	];
})();