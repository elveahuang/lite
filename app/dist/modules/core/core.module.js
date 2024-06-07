"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const utils_1 = require("../../commons/utils");
const authority_admin_controller_1 = require("./controller/admin/authority.admin.controller");
const dashboard_admin_controller_1 = require("./controller/admin/dashboard.admin.controller");
const role_admin_controller_1 = require("./controller/admin/role.admin.controller");
const user_session_admin_controller_1 = require("./controller/admin/user-session.admin.controller");
const user_admin_controller_1 = require("./controller/admin/user.admin.controller");
const authority_app_controller_1 = require("./controller/app/authority.app.controller");
const role_app_controller_1 = require("./controller/app/role.app.controller");
const user_app_controller_1 = require("./controller/app/user.app.controller");
const authority_entity_1 = require("./domain/entity/authority.entity");
const config_entity_1 = require("./domain/entity/config.entity");
const lang_entity_1 = require("./domain/entity/lang.entity");
const role_authority_entity_1 = require("./domain/entity/role-authority.entity");
const role_entity_1 = require("./domain/entity/role.entity");
const user_role_entity_1 = require("./domain/entity/user-role.entity");
const user_session_entity_1 = require("./domain/entity/user-session.entity");
const user_entity_1 = require("./domain/entity/user.entity");
const authority_repository_1 = require("./repository/authority.repository");
const config_repository_1 = require("./repository/config.repository");
const lang_repository_1 = require("./repository/lang.repository");
const role_authority_repository_1 = require("./repository/role-authority.repository");
const role_repository_1 = require("./repository/role.repository");
const user_role_repository_1 = require("./repository/user-role.repository");
const user_session_repository_1 = require("./repository/user-session.repository");
const user_repository_1 = require("./repository/user.repository");
const authority_service_1 = require("./service/authority.service");
const role_service_1 = require("./service/role.service");
const user_session_service_1 = require("./service/user-session.service");
const user_service_1 = require("./service/user.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, user_session_entity_1.UserSessionEntity, role_entity_1.RoleEntity, authority_entity_1.AuthorityEntity, user_role_entity_1.UserRoleEntity, role_authority_entity_1.RoleAuthorityEntity])],
        providers: [
            (0, utils_1.createCustomRepository)(user_entity_1.UserEntity, user_repository_1.UserRepositoryImpl),
            (0, utils_1.createCustomRepository)(user_session_entity_1.UserSessionEntity, user_session_repository_1.UserSessionRepositoryImpl),
            (0, utils_1.createCustomRepository)(role_entity_1.RoleEntity, role_repository_1.RoleRepositoryImpl),
            (0, utils_1.createCustomRepository)(authority_entity_1.AuthorityEntity, authority_repository_1.AuthorityRepositoryImpl),
            (0, utils_1.createCustomRepository)(user_role_entity_1.UserRoleEntity, user_role_repository_1.UserRoleRepositoryImpl),
            (0, utils_1.createCustomRepository)(role_authority_entity_1.RoleAuthorityEntity, role_authority_repository_1.RoleAuthorityRepositoryImpl),
            (0, utils_1.createCustomRepository)(config_entity_1.ConfigEntity, config_repository_1.ConfigRepositoryImpl),
            (0, utils_1.createCustomRepository)(lang_entity_1.LangEntity, lang_repository_1.LangRepositoryImpl),
            user_service_1.UserService,
            user_session_service_1.UserSessionService,
            role_service_1.RoleService,
            authority_service_1.AuthorityService,
        ],
        exports: [typeorm_1.TypeOrmModule, user_service_1.UserService, user_session_service_1.UserSessionService, role_service_1.RoleService, authority_service_1.AuthorityService],
        controllers: [
            role_app_controller_1.RoleAppController,
            user_app_controller_1.UserAppController,
            authority_app_controller_1.AuthorityAppController,
            authority_admin_controller_1.AuthorityAdminController,
            dashboard_admin_controller_1.DashboardAdminController,
            role_admin_controller_1.RoleAdminController,
            user_admin_controller_1.UserAdminController,
            user_session_admin_controller_1.UserSessionAdminController,
        ],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map