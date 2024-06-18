"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const web_1 = require("../utils/web");
const common_1 = require("@nestjs/common");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
class ValidationException extends http_exception_1.HttpException {
    constructor(errors) {
        const response = web_1.Web.error(100000, 'Validation failed', {
            errors: errors,
        });
        super(response, common_1.HttpStatus.OK);
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=validation-exception.js.map