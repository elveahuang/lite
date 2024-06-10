"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web = void 0;
const radash_1 = require("radash");
class Web {
    static STATUS_SUCCESS = 200;
    static STATUS_ERROR = 10000;
    static success(data = {}) {
        if ((0, radash_1.isEmpty)(data)) {
            return {
                code: Web.STATUS_SUCCESS,
                message: 'success',
            };
        }
        else {
            return {
                code: Web.STATUS_SUCCESS,
                data: data,
                message: 'success',
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
    static page(data) {
        return {
            code: 200,
            data: data,
            message: '',
        };
    }
}
exports.Web = Web;
//# sourceMappingURL=web.js.map