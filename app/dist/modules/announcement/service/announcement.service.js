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
exports.AnnouncementService = void 0;
const base_entity_service_1 = require("../../../commons/service/base-entity.service");
const utils_1 = require("../../../commons/utils");
const announcement_entity_1 = require("../domain/entity/announcement.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AnnouncementService = class AnnouncementService extends base_entity_service_1.BaseEntityService {
    announcementRepository;
    constructor(announcementRepository) {
        super();
        this.announcementRepository = announcementRepository;
    }
    async search(request) {
        return this.announcementRepository.find();
    }
    async findAll(request) {
        const { page, limit } = request;
        const result = await this.announcementRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });
        return (0, utils_1.toPage)(result[0], result[1], request);
    }
};
exports.AnnouncementService = AnnouncementService;
exports.AnnouncementService = AnnouncementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(announcement_entity_1.AnnouncementEntity)),
    __metadata("design:paramtypes", [Object])
], AnnouncementService);
//# sourceMappingURL=announcement.service.js.map