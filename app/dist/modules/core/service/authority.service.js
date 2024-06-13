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
exports.AuthorityService = void 0;
const entity_service_1 = require("../../../commons/service/entity.service");
const authority_entity_1 = require("../domain/entity/authority.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AuthorityService = class AuthorityService extends entity_service_1.EntityService {
    authorityRepository;
    constructor(authorityRepository) {
        super(authorityRepository);
        this.authorityRepository = authorityRepository;
    }
    async saveAuthority(dto) {
        const entity = new authority_entity_1.AuthorityEntity();
        entity.id = dto.id;
        await this.getRepository().save(entity);
    }
    async findByUserId(userId) {
        return await this.authorityRepository.findByUserId(userId);
    }
};
exports.AuthorityService = AuthorityService;
exports.AuthorityService = AuthorityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(authority_entity_1.AuthorityEntity)),
    __metadata("design:paramtypes", [Object])
], AuthorityService);
//# sourceMappingURL=authority.service.js.map