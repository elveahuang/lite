"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUserRepository = void 0;
exports.CustomUserRepository = {
    async findByUsername(username) {
        return this.createQueryBuilder('u').where('u.username = :username', { username: username }).getOne();
    },
};
//# sourceMappingURL=user.repository.js.map