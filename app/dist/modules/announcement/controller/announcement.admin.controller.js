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
exports.AnnouncementAdminController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const web_1 = require("../../../commons/utils/web");
const base_entity_controller_1 = require("../../../commons/web/base-entity.controller");
const announcement_delete_dto_1 = require("../domain/dto/announcement-delete.dto");
const announcement_list_dto_1 = require("../domain/dto/announcement-list.dto");
const announcement_save_dto_1 = require("../domain/dto/announcement-save.dto");
const announcement_service_1 = require("../service/announcement.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let AnnouncementAdminController = class AnnouncementAdminController extends base_entity_controller_1.BaseEntityController {
    announcementService;
    constructor(announcementService) {
        super();
        this.announcementService = announcementService;
    }
    async search(request) {
        return web_1.Web.page(await this.announcementService.findAll(request));
    }
    async view(id) {
        return web_1.Web.success(await this.announcementService.findById(id));
    }
    async save(dto) {
        this.announcementService.save(dto).then();
        return web_1.Web.success();
    }
    async delete(request) {
        console.log(request);
        return web_1.Web.success();
    }
};
exports.AnnouncementAdminController = AnnouncementAdminController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, swagger_1.ApiOperation)({ summary: '资讯列表' }),
    (0, common_1.Post)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [announcement_list_dto_1.AnnouncementListDto]),
    __metadata("design:returntype", Promise)
], AnnouncementAdminController.prototype, "search", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/view'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BigInt]),
    __metadata("design:returntype", Promise)
], AnnouncementAdminController.prototype, "view", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [announcement_save_dto_1.AnnouncementSaveDto]),
    __metadata("design:returntype", Promise)
], AnnouncementAdminController.prototype, "save", null);
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [announcement_delete_dto_1.AnnouncementDeleteDto]),
    __metadata("design:returntype", Promise)
], AnnouncementAdminController.prototype, "delete", null);
exports.AnnouncementAdminController = AnnouncementAdminController = __decorate([
    (0, common_1.Controller)('/api/admin/announcement'),
    __metadata("design:paramtypes", [announcement_service_1.AnnouncementService])
], AnnouncementAdminController);
//# sourceMappingURL=announcement.admin.controller.js.map