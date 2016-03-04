'use strict';
var UI = require("../../pages/login_page");
var Srv = require("../../lib/services");
var Util = require('util');
describe('Login page', function () {
    var loginPage = new UI.LoginPage();
    beforeEach(function () {
        loginPage.open();
        browser.executeScript("window.performance.mark('start');");
    });
    afterEach(function () {
        browser.executeScript("window.performance.mark('end'); window.performance.measure('test', 'start', 'end');");
        browser.executeScript("return window.performance.getEntriesByType('measure');")
            .then(function (res) {
            console.log(res);
            browser.manage().logs().get('browser').then(function (browserLog) {
                console.log('log: ' + Util.inspect(browserLog));
            });
        });
    });
    xit('should show Validation error', function () {
        loginPage.fillAndClick({
            email: "wrong@",
            pw: "test"
        });
        browser.executeScript(Srv.hookSrv.getLocaleMsg('requiredFields'))
            .then(function (res) {
            expect(loginPage.getMSG()).toEqual(res);
        });
    });
    it('wait until set new value', function (done) {
        var start = new Date().getTime();
        browser.executeScript("\n\t\t\t\tsetTimeout(function(){\n\t\t\t\t\tdocument.getElementsByTagName('INPUT')[0].setAttribute('class', 'dbg');\n\t\t\t\t\t$('.dbg').val('new@test.com');\n\t\t\t\t}, 300);\n\t\t\t").then(function () {
            console.log('Set Timeout');
        });
        browser.wait(function () {
            var d = protractor.promise.defer();
            var istart = new Date().getTime();
            browser.executeScript("return $('.dbg').val();")
                .then(function (dbg) {
                console.log("top", dbg, (new Date().getTime() - istart) + 'ms', (new Date().getTime() - start) + 'ms');
                d.fulfill(dbg);
            });
            return d.promise;
        }).then(function () {
            done();
        });
    });
});
//# sourceMappingURL=login.js.map