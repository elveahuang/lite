"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAuthGuard = void 0;
const service_exception_1 = require("../../../commons/exception/service.exception");
const auth_service_1 = require("../service/auth.service");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const radash_1 = require("radash");
let AppAuthGuard = class AppAuthGuard {
    reflector;
    authService;
    constructor(reflector, authService) {
        this.reflector = reflector;
        this.authService = authService;
    }
    async canActivate(context) {
        console.log('AppAuthGuard.canActivate()...');
        const anonymous = this.reflector.get('anonymous', context.getHandler());
        const request = context.switchToHttp().getRequest();
        const principal = request.principal;
        if ((0, radash_1.isEmpty)(principal)) {
            if (request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Bearer') {
                const token = request.headers.authorization.split(' ')[1];
                try {
                    request.principal = await this.authService.validate(token);
                }
                catch (e) {
                    console.log(e);
                    if (!anonymous) {
                        throw new service_exception_1.ServiceException();
                    }
                }
            }
        }
        if (anonymous) {
            return true;
        }
        const roles = this.reflector.get('roles', context.getHandler());
        const authorities = this.reflector.get('authorities', context.getHandler());
        if ((0, radash_1.isEmpty)(roles) && (0, radash_1.isEmpty)(authorities)) {
            return true;
        }
        return ((!(0, radash_1.isEmpty)(roles) && this.authService.hasAnyRoles(principal, roles)) ||
            (!(0, radash_1.isEmpty)(authorities) && this.authService.hasAnyAuthorities(principal, authorities)));
    }
};
exports.AppAuthGuard = AppAuthGuard;
exports.AppAuthGuard = AppAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        auth_service_1.AuthService])
], AppAuthGuard);
//# sourceMappingURL=app.guard.js.map