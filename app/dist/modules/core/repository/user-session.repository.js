"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUserSessionRepository = void 0;
exports.CustomUserSessionRepository = {
    async findBySessionId(sid) {
        return this.createQueryBuilder('s').where('s.sessionId = :sessionId', { sessionId: sid }).getOne();
    },
};
//# sourceMappingURL=user-session.repository.js.map