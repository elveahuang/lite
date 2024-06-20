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
exports.UserAppController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const web_1 = require("../../../commons/utils/web");
const announcement_list_dto_1 = require("../../announcement/domain/dto/announcement-list.dto");
const user_check_dto_1 = require("../domain/dto/user-check.dto");
const user_register_dto_1 = require("../domain/dto/user-register.dto");
const user_service_1 = require("../service/user.service");
const common_1 = require("@nestjs/common");
let UserAppController = class UserAppController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async check(dto) {
        return web_1.Web.success(await this.userService.checkUsername(dto));
    }
    async list(dto) {
        return web_1.Web.page(await this.userService.findByPage(dto));
    }
    async register(dto) {
        return web_1.Web.success(await this.userService.register(dto));
    }
    async profile() {
        return web_1.Web.success();
    }
};
exports.UserAppController = UserAppController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/check/username'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_check_dto_1.UserCheckDto]),
    __metadata("design:returntype", Promise)
], UserAppController.prototype, "check", null);
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [announcement_list_dto_1.AnnouncementListDto]),
    __metadata("design:returntype", Promise)
], UserAppController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_register_dto_1.UserRegisterDto]),
    __metadata("design:returntype", Promise)
], UserAppController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('/profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAppController.prototype, "profile", null);
exports.UserAppController = UserAppController = __decorate([
    (0, common_1.Controller)('/api/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserAppController);
//# sourceMappingURL=user.app.controller.js.map