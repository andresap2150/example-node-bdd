const expect = require('chai').expect;
const metroPage = require('../page-objects/metro-cuadrado-home.js')

module.exports = function(){
	this.When(/I enter "([^"]*)" in input$/,function (expresion) {
		console.log("hello");
	})

	this.Given(/^I go to "([^"]*)"$/, function (url, callback) {
         // Write code here that turns the phrase above into concrete actions
         helpers.loadPage(url).then(callback());
    })

    this.When(/^I click the calcutor button$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         metroPage.clickOnCalculator().then(callback());
         //callback(null, 'pending');
    })
}