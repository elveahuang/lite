"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const entity_service_1 = require("../../../commons/service/entity.service");
const types_1 = require("../../../commons/types");
const utils_1 = require("../../../commons/utils");
const authority_entity_1 = require("../domain/entity/authority.entity");
const role_entity_1 = require("../domain/entity/role.entity");
const user_entity_1 = require("../domain/entity/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const radash_1 = require("radash");
const typeorm_2 = require("typeorm");
let UserService = class UserService extends entity_service_1.EntityService {
    userRepository;
    roleRepository;
    authorityRepository;
    constructor(userRepository, roleRepository, authorityRepository) {
        super(userRepository);
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.authorityRepository = authorityRepository;
    }
    async checkUsername(dto) {
        const count = await this.getRepository().count({
            where: {
                username: dto.username,
            },
        });
        return count <= 0;
    }
    async search(pagination = types_1.defaultPagination) {
        const { page, size } = pagination;
        const qb = this.getRepository()
            .createQueryBuilder('u')
            .take(size)
            .skip((page - 1) * size)
            .where({
            active: true,
        });
        if (!(0, radash_1.isEmpty)(pagination.q)) {
            const q = (0, utils_1.generateLike)(pagination.q);
            qb.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where({ username: (0, typeorm_2.Like)(q) })
                    .orWhere({ displayName: (0, typeorm_2.Like)(q) })
                    .orWhere({ name: (0, typeorm_2.Like)(q) });
            }));
        }
        return qb.getManyAndCount();
    }
    async register(dto) { }
    async findByUsername(username) {
        return await this.userRepository.findByUsername(username);
    }
    async saveUser(dto) {
        const entity = new user_entity_1.UserEntity();
        entity.id = dto.id;
        entity.username = dto.username;
        entity.password = dto.password;
        await this.getRepository().save(entity);
    }
    toDetailsDto(entity) {
        return {
            id: entity.id,
            username: entity.username,
            displayName: entity.displayName,
            name: entity.name,
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.RoleEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(authority_entity_1.AuthorityEntity)),
    __metadata("design:paramtypes", [Object, Object, Object])
], UserService);
//# sourceMappingURL=user.service.js.map