"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web = void 0;
const radash_1 = require("radash");
class Web {
    static STATUS_SUCCESS = 1;
    static STATUS_ERROR = 0;
    static success(data = {}) {
        if ((0, radash_1.isEmpty)(data)) {
            return {
                code: Web.STATUS_SUCCESS,
                data: [],
            };
        }
        else {
            return {
                code: Web.STATUS_SUCCESS,
                data: data,
            };
        }
    }
    static error(code = 100000, message = '', data = {}) {
        if ((0, radash_1.isEmpty)(data)) {
            return {
                status: Web.STATUS_ERROR,
                code: code,
                message: message,
            };
        }
        else {
            return {
                status: Web.STATUS_ERROR,
                code: code,
                data: data,
                message: message,
            };
        }
    }
}
exports.Web = Web;
//# sourceMappingURL=web.js.map