'use strict';

/**
 * @ngdoc service
 * @name anthroCategoryApp.apiProductFcty
 * @description
 * # apiProductFcty
 * Factory in the anthroCategoryApp.
 * Builds a factory for the product apis
 */
angular.module('anthroCategoryApp')
	.factory('apiProductFcty', function ($http, $q) {
		var factory = {},
			baseProductUrl = "http://www.anthropologie.com/api/v1/product/",
			baseProductImageUrl = "http://images.anthropologie.com/is/image/Anthropologie/";

		// Method builds a promise object for the requested product by id
		factory.getProduct = function(productId) {
			var deferred = $q.defer();

			$http
				.get(baseProductUrl + productId)
				.success(function(productData) {
					deferred.resolve(productData);
				}).error(function(errData, errStatus) {
					deferred.reject(errStatus);
				});

			return deferred.promise;
		};

		// Method builds the image source urls for products
		factory.buildProductImageSrcs = function(product) {
			var imageUrls = {
				init: baseProductImageUrl + product.productId +
					"_" + product.colors[0].colorCode +
					"_b?$an-category$",
				hover: baseProductImageUrl + product.productId +
					"_" + product.colors[0].colorCode +
					"_b2?$an-category$"
			};
			return imageUrls;
		};

		return factory;
	});
