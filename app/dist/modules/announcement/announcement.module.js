"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementModule = void 0;
const commons_module_1 = require("../../commons/commons.module");
const utils_1 = require("../../commons/utils");
const announcement_admin_controller_1 = require("./controller/announcement.admin.controller");
const announcement_app_controller_1 = require("./controller/announcement.app.controller");
const announcement_entity_1 = require("./domain/entity/announcement.entity");
const announcement_repository_1 = require("./repository/announcement.repository");
const announcement_service_1 = require("./service/announcement.service");
const auth_module_1 = require("../auth/auth.module");
const core_module_1 = require("../core/core.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AnnouncementModule = class AnnouncementModule {
};
exports.AnnouncementModule = AnnouncementModule;
exports.AnnouncementModule = AnnouncementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([announcement_entity_1.AnnouncementEntity]), commons_module_1.CommonsModule, core_module_1.CoreModule, auth_module_1.AuthModule],
        providers: [(0, utils_1.createCustomRepository)(announcement_entity_1.AnnouncementEntity, announcement_repository_1.AnnouncementRepositoryImpl), announcement_service_1.AnnouncementService],
        controllers: [announcement_admin_controller_1.AnnouncementAdminController, announcement_app_controller_1.AnnouncementAppController],
        exports: [announcement_service_1.AnnouncementService],
    })
], AnnouncementModule);
//# sourceMappingURL=announcement.module.js.map