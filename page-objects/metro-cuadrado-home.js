module.exports = {
	url: 'https://www.google.com/',
	elements: {
	    searchInput: by.name('q'),
	    searchResultLink: by.css('div.g > h3 > a'),
	    calculatorModal: by.css('ul > li:nth-child(3) >div > a.text-primary'),
	    loanCalculatorButton : by.css('ul > li:nth-child(3) > div > div.mega-menu div:nth-child(1) > div > a:nth-child(2)')
	},

	performSearch: function (searchQuery){
		let selector = page.googleSearch.elements.searchInput;
		return driver.findelement(selector).sendKeys(searchQuery, selenium.Key.ENTER);
	},

	clickOnCalculator: function () {
		const component = this.elements;
		return driver.findElement(component.calculatorModal).click()
		    .then(() => driver.findElement(component.loanCalculatorButton).click());
	}
}