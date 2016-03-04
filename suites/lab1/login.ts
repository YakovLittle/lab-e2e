/// <reference path='../../_all.d.ts' />
'use strict';

import UI = require("../../pages/login_page");
import Srv = require("../../lib/services");
//var _ = require('../../lib/lodash');
var Util = require('util');

// spec.js
describe('Login page', () => {
	var loginPage = new UI.LoginPage();

	beforeEach(function() {
		loginPage.open();

		browser.executeScript("window.performance.mark('start');");
	});

	afterEach(function() {
		browser.executeScript("window.performance.mark('end'); window.performance.measure('test', 'start', 'end');");
		browser.executeScript("return window.performance.getEntriesByType('measure');")
		.then(function(res) {
			console.log(res);
			browser.manage().logs().get('browser').then(function(browserLog) {
			  console.log('log: ' + Util.inspect(browserLog));
			});
		});
	});

	xit('should show Validation error', () => {
		loginPage.fillAndClick({
								email: "wrong@",
								pw: "test"
		});

		browser.executeScript(Srv.hookSrv.getLocaleMsg('requiredFields'))
		.then(function(res) {
			//get localized message
		   	expect(loginPage.getMSG()).toEqual(res);
		});
	});

	it('wait until set new value', (done) => {
	    var start = new Date().getTime();

		browser.executeScript(`
				setTimeout(function(){
					document.getElementsByTagName('INPUT')[0].setAttribute('class', 'dbg');
					$('.dbg').val('new@test.com');
				}, 300);
			`).then( () => {
				console.log('Set Timeout');
			});

	    browser.wait(function() {
			var d = protractor.promise.defer();
			var istart = new Date().getTime();

			browser.executeScript("return $('.dbg').val();")
			.then( (dbg) => {
				console.log(
					"top",
					dbg, 
					(new Date().getTime()-istart) + 'ms',
					(new Date().getTime()-start) + 'ms'
				);
				d.fulfill(dbg);
			});
			return d.promise;
	    }).then(function(){
			done();
	    });
  	});
});