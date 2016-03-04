/// <reference path='../_all.d.ts' />
'use strict';

export class LoginPage {
    private elList: Array<protractor.ElementFinder>;

    //Initialization
    constructor() {
        this.elList = [];
        this.elList['email'] = element(by.model('vm.email'));
        this.elList['pw'] = element(by.model('vm.pw'));
        this.elList['bLogin'] = element(by.id('bALogin'));
        this.elList['msg'] = element(by.binding('vm.msg'));
    }

    open() {
        browser.get('#/login');
    }

    //TODO: create User Interface
    fillAndClick(input: Object) {
        for (var i in input) {
            if (this.elList[i]) {
                this.elList[i].sendKeys(input[i]);
            }
        }
        this.elList['bLogin'].click();
    }

    getMSG(): protractor.promise.Promise<string> {
        return this.elList['msg'].getText();
    }
}