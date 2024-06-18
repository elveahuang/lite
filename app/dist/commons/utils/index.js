"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.generateLike = exports.toPage = exports.createCustomRepository = exports.log = exports.uuid = void 0;
const constants_1 = require("../constants");
const validation_exception_1 = require("../exception/validation-exception");
const typeorm_1 = require("@nestjs/typeorm");
const lodash_1 = require("lodash");
const radash_1 = require("radash");
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
const toPage = (data, total, request) => {
    return {
        content: data,
        totalElements: total,
        pageable: {
            pageNumber: request.page,
            pageSize: request.size,
        },
    };
};
exports.toPage = toPage;
const generateLike = (value) => {
    return `%${value}%`;
};
exports.generateLike = generateLike;
const validate = (value, schema, options = {}) => {
    const result = (0, exports.validate)(value, schema, (0, lodash_1.merge)(constants_1.defaultJoiValidationOptions, options));
    if (!(0, radash_1.isEmpty)(result.error)) {
        console.log(result.error);
        const errors = [];
        result.error.details.forEach((e) => {
            const error = {
                key: e.context.key,
                label: e.context.label,
                value: result.value[e.context.key],
                message: e.message,
            };
            errors.push(error);
        });
        throw new validation_exception_1.ValidationException(errors);
    }
    return result;
};
exports.validate = validate;
//# sourceMappingURL=index.js.map