'use strict';
var hookSrv = (function () {
    function hookSrv() {
    }
    hookSrv.getLocaleMsg = function (key) {
        return "var filter = angular.element('*[ng-app]').injector().get('$filter'); return filter('i18n')('" + key + "');";
    };
    return hookSrv;
}());
exports.hookSrv = hookSrv;
//# sourceMappingURL=services.js.map