"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerModule = void 0;
const commons_module_1 = require("../../commons/commons.module");
const utils_1 = require("../../commons/utils");
const auth_module_1 = require("../auth/auth.module");
const banner_admin_controller_1 = require("./controller/banner.admin.controller");
const banner_app_controller_1 = require("./controller/banner.app.controller");
const banner_entity_1 = require("./entity/banner.entity");
const banner_repository_1 = require("./repository/banner.repository");
const banner_service_1 = require("./service/banner.service");
const core_module_1 = require("../core/core.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let BannerModule = class BannerModule {
};
exports.BannerModule = BannerModule;
exports.BannerModule = BannerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([banner_entity_1.BannerEntity]), commons_module_1.CommonsModule, core_module_1.CoreModule, auth_module_1.AuthModule],
        providers: [(0, utils_1.createCustomRepository)(banner_entity_1.BannerEntity, banner_repository_1.BannerRepositoryImpl), banner_service_1.BannerService],
        controllers: [banner_admin_controller_1.BannerAdminController, banner_app_controller_1.BannerAppController],
        exports: [banner_service_1.BannerService],
    })
], BannerModule);
//# sourceMappingURL=banner.module.js.map