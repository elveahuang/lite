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
exports.BannerAppController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const web_1 = require("../../../commons/utils/web");
const banner_list_dto_1 = require("../domain/dto/banner-list.dto");
const banner_service_1 = require("../service/banner.service");
const common_1 = require("@nestjs/common");
let BannerAppController = class BannerAppController {
    bannerService;
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    async list(query) {
        return web_1.Web.page(await this.bannerService.findByPage(query));
    }
    async view(id) {
        return web_1.Web.success(await this.bannerService.findById(id));
    }
};
exports.BannerAppController = BannerAppController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [banner_list_dto_1.BannerListDto]),
    __metadata("design:returntype", Promise)
], BannerAppController.prototype, "list", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/view'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerAppController.prototype, "view", null);
exports.BannerAppController = BannerAppController = __decorate([
    (0, common_1.Controller)('/api/banner'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerAppController);
//# sourceMappingURL=banner.app.controller.js.map