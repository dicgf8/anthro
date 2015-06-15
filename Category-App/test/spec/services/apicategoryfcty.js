'use strict';

describe('Factory: apiCategoryFcty', function () {

	// load the service's module
	beforeEach(module('anthroCategoryApp'));

	// instantiate service
	var apiCategoryFcty;
	beforeEach(inject(function (_apiCategoryFcty_) {
		apiCategoryFcty = _apiCategoryFcty_;
	}));

	it('Check if factory is defined', function () {
		expect(apiCategoryFcty).toBeDefined();
	});

	it('Check if getNewDresses method is defined', function () {
		expect(apiCategoryFcty.getNewDresses).toBeDefined();
	});
});
