"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceException = void 0;
const common_1 = require("@nestjs/common");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
const web_1 = require("../utils/web");
class ServiceException extends http_exception_1.HttpException {
    constructor(code = 100000, message = '', data = {}) {
        const response = web_1.Web.error(code, message, data);
        super(response, common_1.HttpStatus.OK);
    }
}
exports.ServiceException = ServiceException;
//# sourceMappingURL=service.exception.js.map