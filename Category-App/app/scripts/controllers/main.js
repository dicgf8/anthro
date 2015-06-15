'use strict';

/**
 * @ngdoc function
 * @name anthroCategoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anthroCategoryApp
 */
angular.module('anthroCategoryApp')
	.controller('MainCtrl', function ($scope, apiCategoryFcty, apiProductFcty) {
		$scope.ancestors = $scope.ancestors || [];
		$scope.displayName = $scope.displayName || "";
		$scope.dresses = $scope.dresses || [];

		// Provides a method to correctly format the dress price in the view
		$scope.dressPrice = function() {
			var dress = $scope.dresses[this.$index];

			return dress.skusInfo[0].priceLists[0].listPrice.toFixed(2);
		};

		// Provides a method to assign the correct class for the currency type
		$scope.dressPriceClass = function() {
			var dress = $scope.dresses[this.$index];

			return dress.skusInfo[0].priceLists[0].currencyCode.toLowerCase();
		};

		var getProductErr = function() {
				/* TODO: Holds error handler for promise from retrieving product data */
			},
			productDataProc = function(productData) {
				// Handles the promise success return data for populating the view

				productData.product.imageUrls = apiProductFcty.buildProductImageSrcs(productData.product);
				productData.product.src = productData.product.imageUrls.init;

				$scope.dresses.push(productData.product);
			},
			getNewDressesErr = function() {
				/* TODO: Holds error handler for promise from retrieving category data */
			},
			categoryDataProc = function(categoryData) {
				// Handles the promise success return category data start the promise for the product retrieval
				// Sets data necessary for the view

				var products = categoryData.category.products;

				$scope.ancestors = categoryData.category.ancestors;
				$scope.ancestors.push({displayName: categoryData.category.displayName});
				$scope.displayName = categoryData.category.displayName;

				for(var productIndex = 0; productIndex < products.length; productIndex++) {
					apiProductFcty.getProduct(products[productIndex])
						.then(productDataProc, getProductErr);
				}
			};

		/* The code below starts controller activity to populate the view
		** and calls the getNewDresses promise from the apiCategoryFcty */
		apiCategoryFcty.getNewDresses().then(categoryDataProc, getNewDressesErr);
	});
