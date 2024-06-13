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
exports.RoleAdminController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const types_1 = require("../../../commons/types");
const web_1 = require("../../../commons/utils/web");
const base_controller_1 = require("../../../commons/web/base.controller");
const role_list_dto_1 = require("../domain/dto/role-list.dto");
const role_save_dto_1 = require("../domain/dto/role-save.dto");
const role_service_1 = require("../service/role.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let RoleAdminController = class RoleAdminController extends base_controller_1.BaseController {
    roleService;
    constructor(roleService) {
        super();
        this.roleService = roleService;
    }
    async list(dto) {
        return web_1.Web.page(await this.roleService.findByPage(dto));
    }
    async view(id) {
        return web_1.Web.success(await this.roleService.findById(id));
    }
    async save(dto) {
        this.roleService.saveRole(dto).then();
        return web_1.Web.success();
    }
    async delete(dto) {
        this.roleService.batchSoftDelete(dto).then();
        return web_1.Web.success();
    }
};
exports.RoleAdminController = RoleAdminController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, swagger_1.ApiOperation)({ summary: '列表' }),
    (0, common_1.Post)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_list_dto_1.RoleListDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "list", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, swagger_1.ApiOperation)({ summary: '资讯详情' }),
    (0, common_1.Post)('/view'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BigInt]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "view", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_save_dto_1.RoleSaveDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "save", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.DeleteQuery]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "delete", null);
exports.RoleAdminController = RoleAdminController = __decorate([
    (0, common_1.Controller)('/api/admin/role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleAdminController);
//# sourceMappingURL=role.admin.controller.js.map