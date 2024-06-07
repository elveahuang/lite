"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityRepositoryImpl = void 0;
const role_authority_entity_1 = require("../domain/entity/role-authority.entity");
const user_role_entity_1 = require("../domain/entity/user-role.entity");
exports.AuthorityRepositoryImpl = {
    async findByUserId(userId) {
        return this.createQueryBuilder('a')
            .innerJoin(role_authority_entity_1.RoleAuthorityEntity, 'ra', 'ra.authorityId = a.id')
            .innerJoin(user_role_entity_1.UserRoleEntity, 'ur', 'ur.roleId = ra.roleId and ur.userId = :userId', { userId: userId })
            .getMany();
    },
};
//# sourceMappingURL=authority.repository.js.map