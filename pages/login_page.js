'use strict';
var LoginPage = (function () {
    function LoginPage() {
        this.elList = [];
        this.elList['email'] = element(by.model('vm.email'));
        this.elList['pw'] = element(by.model('vm.pw'));
        this.elList['bLogin'] = element(by.id('bALogin'));
        this.elList['msg'] = element(by.binding('vm.msg'));
    }
    LoginPage.prototype.open = function () {
        browser.get('#/login');
    };
    LoginPage.prototype.fillAndClick = function (input) {
        for (var i in input) {
            if (this.elList[i]) {
                this.elList[i].sendKeys(input[i]);
            }
        }
        this.elList['bLogin'].click();
    };
    LoginPage.prototype.getMSG = function () {
        return this.elList['msg'].getText();
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login_page.js.map