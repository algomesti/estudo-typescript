"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailServices = /** @class */ (function () {
    function EmailServices() {
    }
    EmailServices.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("email enviado para " + to.name + "<" + to.email + ">: " + message.subject);
    };
    return EmailServices;
}());
exports.default = EmailServices;
