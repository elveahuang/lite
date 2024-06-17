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
exports.UserAdminController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const types_1 = require("../../../commons/types");
const web_1 = require("../../../commons/utils/web");
const base_controller_1 = require("../../../commons/web/base.controller");
const user_list_dto_1 = require("../domain/dto/user-list.dto");
const user_save_dto_1 = require("../domain/dto/user-save.dto");
const user_service_1 = require("../service/user.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let UserAdminController = class UserAdminController extends base_controller_1.BaseController {
    userService;
    constructor(userService) {
        super();
        this.userService = userService;
    }
    async list(dto) {
        return web_1.Web.page(await this.userService.findByPage(dto));
    }
    async view(id) {
        return web_1.Web.success(await this.userService.findById(id));
    }
    async save(dto) {
        this.userService.saveUser(dto).then();
        return web_1.Web.success();
    }
    async delete(dto) {
        this.userService.batchSoftDelete(dto).then();
        return web_1.Web.success();
    }
};
exports.UserAdminController = UserAdminController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, swagger_1.ApiOperation)({ summary: '列表' }),
    (0, common_1.Post)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_list_dto_1.UserListDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "list", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, swagger_1.ApiOperation)({ summary: '资讯详情' }),
    (0, common_1.Post)('/details'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BigInt]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "view", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_save_dto_1.UserSaveDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "save", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.DeleteQuery]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "delete", null);
exports.UserAdminController = UserAdminController = __decorate([
    (0, common_1.Controller)('/api/admin/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserAdminController);
//# sourceMappingURL=user.admin.controller.js.map