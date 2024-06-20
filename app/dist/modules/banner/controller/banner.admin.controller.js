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
exports.BannerAdminController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const types_1 = require("../../../commons/types");
const web_1 = require("../../../commons/utils/web");
const base_controller_1 = require("../../../commons/web/base.controller");
const banner_list_dto_1 = require("../domain/dto/banner-list.dto");
const banner_save_dto_1 = require("../domain/dto/banner-save.dto");
const banner_service_1 = require("../service/banner.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let BannerAdminController = class BannerAdminController extends base_controller_1.BaseController {
    bannerService;
    constructor(bannerService) {
        super();
        this.bannerService = bannerService;
    }
    async list(dto) {
        return web_1.Web.page(await this.bannerService.findByPage(dto));
    }
    async view(id) {
        return web_1.Web.success(await this.bannerService.findById(id));
    }
    async save(dto) {
        this.bannerService.saveBanner(dto).then();
        return web_1.Web.success();
    }
    async delete(dto) {
        this.bannerService.batchSoftDelete(dto).then();
        return web_1.Web.success();
    }
};
exports.BannerAdminController = BannerAdminController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, swagger_1.ApiOperation)({ summary: '列表' }),
    (0, common_1.Post)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [banner_list_dto_1.BannerListDto]),
    __metadata("design:returntype", Promise)
], BannerAdminController.prototype, "list", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, swagger_1.ApiOperation)({ summary: '详情' }),
    (0, common_1.Post)('/view'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerAdminController.prototype, "view", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [banner_save_dto_1.BannerSaveDto]),
    __metadata("design:returntype", Promise)
], BannerAdminController.prototype, "save", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.DeleteQuery]),
    __metadata("design:returntype", Promise)
], BannerAdminController.prototype, "delete", null);
exports.BannerAdminController = BannerAdminController = __decorate([
    (0, common_1.Controller)('/api/admin/banner'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerAdminController);
//# sourceMappingURL=banner.admin.controller.js.map