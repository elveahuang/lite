"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const common_1 = require("@nestjs/common");
exports.Context = (0, common_1.createParamDecorator)((data = '', ctx) => {
    console.log('createParamDecorator Context...');
    const request = ctx.switchToHttp().getRequest();
    console.log(request.headers['clientId']);
    return {
        ua: request.headers['user-agent'],
        ip: request.ip,
        locale: request.hostname,
        clientId: request.headers['clientId'],
        clientVersion: request.headers['clientVersion'],
    };
});
//# sourceMappingURL=context.decorator.js.map