"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntityService = void 0;
const entity_service_1 = require("./entity.service");
class BaseEntityService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    getService() {
        return entity_service_1.EntityService.getInstance(this.repository);
    }
    getEntityService(repository) {
        return entity_service_1.EntityService.getInstance(repository);
    }
}
exports.BaseEntityService = BaseEntityService;
//# sourceMappingURL=base-entity.service.js.map