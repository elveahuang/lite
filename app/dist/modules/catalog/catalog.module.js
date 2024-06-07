"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogModule = void 0;
const commons_module_1 = require("../../commons/commons.module");
const utils_1 = require("../../commons/utils");
const auth_module_1 = require("../auth/auth.module");
const catalog_admin_controller_1 = require("./controller/catalog.admin.controller");
const catalog_app_controller_1 = require("./controller/catalog.app.controller");
const catalog_relation_entity_1 = require("./entity/catalog-relation.entity");
const catalog_type_entity_1 = require("./entity/catalog-type.entity");
const catalog_entity_1 = require("./entity/catalog.entity");
const catalog_relation_repository_1 = require("./repository/catalog-relation.repository");
const catalog_type_repository_1 = require("./repository/catalog-type.repository");
const catalog_repository_1 = require("./repository/catalog.repository");
const catalog_service_1 = require("./service/catalog.service");
const core_module_1 = require("../core/core.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let CatalogModule = class CatalogModule {
};
exports.CatalogModule = CatalogModule;
exports.CatalogModule = CatalogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([catalog_entity_1.CatalogEntity, catalog_relation_entity_1.CatalogRelationEntity, catalog_type_entity_1.CatalogTypeEntity]), commons_module_1.CommonsModule, core_module_1.CoreModule, auth_module_1.AuthModule],
        providers: [
            (0, utils_1.createCustomRepository)(catalog_entity_1.CatalogEntity, catalog_repository_1.CatalogRepositoryImpl),
            (0, utils_1.createCustomRepository)(catalog_relation_entity_1.CatalogRelationEntity, catalog_relation_repository_1.CatalogRelationRepositoryImpl),
            (0, utils_1.createCustomRepository)(catalog_type_entity_1.CatalogTypeEntity, catalog_type_repository_1.CatalogTypeRepositoryImpl),
            catalog_service_1.CatalogService,
        ],
        controllers: [catalog_admin_controller_1.CatalogAdminController, catalog_app_controller_1.CatalogAppController],
        exports: [catalog_service_1.CatalogService],
    })
], CatalogModule);
//# sourceMappingURL=catalog.module.js.map