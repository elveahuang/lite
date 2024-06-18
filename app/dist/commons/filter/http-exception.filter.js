"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const service_exception_1 = require("../exception/service.exception");
const system_exception_1 = require("../exception/system.exception");
const validation_exception_1 = require("../exception/validation-exception");
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        console.log(`HttpExceptionFilter.catch()...`);
        console.log(exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception.getStatus();
        if (exception instanceof service_exception_1.ServiceException) {
            response.status(statusCode).send(exception.getResponse());
        }
        else if (exception instanceof system_exception_1.SystemException) {
            response.status(statusCode).send(exception.getResponse());
        }
        else if (exception instanceof validation_exception_1.ValidationException) {
            response.status(statusCode).send(exception.getResponse());
        }
        else {
            response.status(statusCode).send({
                statusCode,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        }
        console.log(`HttpExceptionFilter.catch() finish.`);
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map