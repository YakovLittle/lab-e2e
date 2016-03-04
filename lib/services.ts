/// <reference path='../_all.d.ts' />
'use strict';

export class hookSrv {

    public static getLocaleMsg (key: string): string {
        return "var filter = angular.element('*[ng-app]').injector().get('$filter'); return filter('i18n')('" + key +"');"
    }
}