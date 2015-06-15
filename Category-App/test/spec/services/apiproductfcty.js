'use strict';

describe('Factory: apiProductFcty', function () {

	// load the service's module
	beforeEach(module('anthroCategoryApp'));

	// instantiate service
	var apiProductFcty,
		product,
		scope;
	beforeEach(inject(function (_apiProductFcty_) {
		apiProductFcty = _apiProductFcty_;

		product = {
			productId: 1,
			colors: [
				{
					colorCode: 2
				}
			]
		};
	}));

	it('Check if factory is defined', function () {
		expect(apiProductFcty).toBeDefined();
	});

	it('Check if getNewDresses method is defined', function () {
		expect(apiProductFcty.getProduct).toBeDefined();
	});

	it('Check if buildProductImageSrcs method is defined', function () {
		expect(apiProductFcty.buildProductImageSrcs).toBeDefined();
	});

	it('Check if buildProductImageSrcs method is defined', function () {
		expect(apiProductFcty.buildProductImageSrcs).toBeDefined();
	});

	it('Check if image urls are build from buildProductImageSrcs', function () {
		expect(apiProductFcty.buildProductImageSrcs(product).init).toBe("http://images.anthropologie.com/is/image/Anthropologie/1_2_b?$an-category$");
		expect(apiProductFcty.buildProductImageSrcs(product).hover).toBe("http://images.anthropologie.com/is/image/Anthropologie/1_2_b2?$an-category$");
	});

});
