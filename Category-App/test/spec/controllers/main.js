'use strict';

describe('Controller: MainCtrl', function () {

	// load the controller's module
	beforeEach(module('anthroCategoryApp'));

	var MainCtrl,
		scope,
		$this;

  // Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();

		scope.ancestors = [];
		scope.displayName = "";
		scope.dresses = [];

		scope.dresses[0] = {
			skusInfo: [
				{
					priceLists: [
						{
							listPrice: 200,
							currencyCode: "USD"
						}
					]
				}
			]
		};

		$this = {
			$index: 0
		};

		MainCtrl = $controller('MainCtrl', {
			$scope: scope
		});
	}));

	it('Check if ancestors is defined', function () {
		expect(scope.ancestors).toBeDefined();
	});

	it('Check if displayName is defined', function () {
		expect(scope.displayName).toBeDefined();
	});

	it('Check if displayName is defined', function () {
		expect(scope.dresses).toBeDefined();
	});

	it('Check if dressPrice is defined', function () {
		expect(scope.dressPrice).toBeDefined();
	});

	it('Check if dressPrice returns expected value', function () {
		expect(scope.dressPrice.call($this)).toBe("200.00");
	});

	it('Check if dressPriceClass is defined', function () {
		expect(scope.dressPriceClass).toBeDefined();
	});

	it('Check if dressPriceClass returns expected value', function () {
		expect(scope.dressPriceClass.call($this)).toBe("usd");
	});
});
