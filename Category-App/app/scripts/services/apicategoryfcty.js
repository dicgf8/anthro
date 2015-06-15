'use strict';

/**
 * @ngdoc service
 * @name anthroCategoryApp.apiCategoryFcty
 * @description
 * # apiCategoryFcty
 * Factory in the anthroCategoryApp.
 * Builds a factory for the category apis
 */
angular.module('anthroCategoryApp')
	.factory('apiCategoryFcty', function ($http, $q) {
		var factory = {};
		var baseCategoryUrl = "http://www.anthropologie.com/api/v1/category/";

		// Method builds a promise object for the new dresses category
		factory.getNewDresses = function() {
			var deferred = $q.defer();

			$http
				.get(baseCategoryUrl + "CLOTHES-NEW-DRESSES")
				.success(function(dressData) {
					deferred.resolve(dressData);
				}).error(function(errData, errStatus) {
					deferred.reject(errStatus);
				});

			return deferred.promise;
		};

		return factory;
	});
