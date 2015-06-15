'use strict';

describe('Directive: productImgHoverDir', function () {

	// load the directive's module
	beforeEach(module('anthroCategoryApp'));

	var element,
		scope;

	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new();
		
		scope.$index = 0;
		scope.dresses = [];
	}));

	it('Check if events were attached', inject(function ($compile) {
		element = angular.element('<dress-img-hover></dress-img-hoverr>');
		element = $compile(element)(scope);
		expect(typeof element[0].onmouseenter).toBe("function");
		expect(typeof element[0].onmouseleave).toBe("function");
	}));
});
