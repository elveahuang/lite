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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const sequence_service_1 = require("../../../commons/service/sequence.service");
const web_1 = require("../../../commons/utils/web");
const credentials_dto_1 = require("../dto/credentials.dto");
const local_guard_1 = require("../passport/local.guard");
const auth_service_1 = require("../service/auth.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AuthController = class AuthController {
    configService;
    sequenceService;
    authService;
    constructor(configService, sequenceService, authService) {
        this.configService = configService;
        this.sequenceService = sequenceService;
        this.authService = authService;
    }
    async login(reg) {
        return reg.user;
    }
    async token(credentialsDto) {
        return this.authService.auth(credentialsDto);
    }
    async me(req) {
        return web_1.Web.success(req.principal);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/auth/login'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/auth/token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentials_dto_1.CredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "token", null);
__decorate([
    (0, common_1.Get)('/api/user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        sequence_service_1.SequenceService,
        auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map