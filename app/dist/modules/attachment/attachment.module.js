"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentModule = void 0;
const commons_module_1 = require("../../commons/commons.module");
const utils_1 = require("../../commons/utils");
const attachment_admin_controller_1 = require("./controller/attachment.admin.controller");
const attachment_app_controller_1 = require("./controller/attachment.app.controller");
const attachment_file_entity_1 = require("./domain/entity/attachment-file.entity");
const attachment_relation_entity_1 = require("./domain/entity/attachment-relation.entity");
const attachment_type_entity_1 = require("./domain/entity/attachment-type.entity");
const attachment_file_repository_1 = require("./repository/attachment-file.repository");
const attachment_relation_repository_1 = require("./repository/attachment-relation.repository");
const attachment_type_repository_1 = require("./repository/attachment-type.repository");
const attachment_service_1 = require("./service/attachment.service");
const auth_module_1 = require("../auth/auth.module");
const core_module_1 = require("../core/core.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AttachmentModule = class AttachmentModule {
};
exports.AttachmentModule = AttachmentModule;
exports.AttachmentModule = AttachmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([attachment_file_entity_1.AttachmentFileEntity, attachment_relation_entity_1.AttachmentRelationEntity, attachment_type_entity_1.AttachmentTypeEntity]),
            commons_module_1.CommonsModule,
            core_module_1.CoreModule,
            auth_module_1.AuthModule,
        ],
        providers: [
            (0, utils_1.createCustomRepository)(attachment_file_entity_1.AttachmentFileEntity, attachment_file_repository_1.AttachmentFileRepositoryImpl),
            (0, utils_1.createCustomRepository)(attachment_relation_entity_1.AttachmentRelationEntity, attachment_relation_repository_1.AttachmentRelationRepositoryImpl),
            (0, utils_1.createCustomRepository)(attachment_type_entity_1.AttachmentTypeEntity, attachment_type_repository_1.AttachmentTypeRepositoryImpl),
            attachment_service_1.AttachmentService,
        ],
        controllers: [attachment_admin_controller_1.AttachmentAdminController, attachment_app_controller_1.AttachmentAppController],
        exports: [attachment_service_1.AttachmentService],
    })
], AttachmentModule);
//# sourceMappingURL=attachment.module.js.map