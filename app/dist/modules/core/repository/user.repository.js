"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
exports.UserRepositoryImpl = {
    async findByUsername(username) {
        return this.createQueryBuilder('u').where('u.username = :username', { username: username }).getOne();
    },
};
//# sourceMappingURL=user.repository.js.map