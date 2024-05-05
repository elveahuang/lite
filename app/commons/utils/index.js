"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomRepository = exports.log = exports.uuid = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const uuid = () => {
    return (0, uuid_1.v4)();
};
exports.uuid = uuid;
function log(log) {
    console.log(log);
}
exports.log = log;
const createCustomRepository = (entity, repository) => {
    return {
        provide: (0, typeorm_1.getRepositoryToken)(entity),
        inject: [(0, typeorm_1.getDataSourceToken)()],
        useFactory(datasource) {
            return datasource.getRepository(entity).extend(repository);
        },
    };
};
exports.createCustomRepository = createCustomRepository;
//# sourceMappingURL=index.js.map