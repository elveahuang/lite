"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepositoryImpl = void 0;
const user_role_entity_1 = require("../domain/entity/user-role.entity");
exports.RoleRepositoryImpl = {
    async findByUserId(userId) {
        return this.createQueryBuilder('e').innerJoin(user_role_entity_1.UserRoleEntity, 'r', 'r.roleId = e.id and r.userId = :userId', { userId: userId }).getMany();
    },
};
//# sourceMappingURL=role.repository.js.map