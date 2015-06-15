'use strict';

/**
 * @ngdoc directive
 * @name anthroCategoryApp.directive:productImgHoverDir
 * @description
 * # productImgHoverDir
 */
angular.module('anthroCategoryApp')
	.directive('dressImgHover', function () {
		return {
			link: function ($scope, element) {
				// Handles image swap events on mouseenter and mouseleave for dresses

				var dress = $scope.dresses[$scope.$index];

				element[0].onmouseenter = function() {
					element[0].src = dress.imageUrls.hover;
				};

				element[0].onmouseleave = function() {
					element[0].src = dress.imageUrls.init;
				};
			}
		};
	});
