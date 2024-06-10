"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityService = void 0;
class EntityService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    getRepository() {
        return this.repository;
    }
    static getInstance(repository) {
        return new EntityService(repository);
    }
}
exports.EntityService = EntityService;
//# sourceMappingURL=entity.service.js.map