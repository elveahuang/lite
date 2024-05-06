"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemException = void 0;
const common_1 = require("@nestjs/common");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
const web_1 = require("../utils/web");
class SystemException extends http_exception_1.HttpException {
    constructor(code, message, data = {}) {
        const response = web_1.Web.error(code, message, data);
        super(response, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.SystemException = SystemException;
//# sourceMappingURL=system.exception.js.map