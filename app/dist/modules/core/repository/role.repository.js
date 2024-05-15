"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRoleRepository = void 0;
const user_role_entity_1 = require("../entity/user-role.entity");
exports.CustomRoleRepository = {
    async findByUserId(userId) {
        return this.createQueryBuilder('e').innerJoin(user_role_entity_1.UserRoleEntity, 'r', 'r.roleId = e.id and r.userId = :userId', { userId: userId }).getMany();
    },
};
//# sourceMappingURL=role.repository.js.map