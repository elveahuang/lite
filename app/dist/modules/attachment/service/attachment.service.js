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
exports.AttachmentService = void 0;
const attachment_file_entity_1 = require("../entity/attachment-file.entity");
const attachment_relation_entity_1 = require("../entity/attachment-relation.entity");
const attachment_type_entity_1 = require("../entity/attachment-type.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AttachmentService = class AttachmentService {
    attachmentFileRepository;
    attachmentRelationRepository;
    attachmentTypeRepository;
    constructor(attachmentFileRepository, attachmentRelationRepository, attachmentTypeRepository) {
        this.attachmentFileRepository = attachmentFileRepository;
        this.attachmentRelationRepository = attachmentRelationRepository;
        this.attachmentTypeRepository = attachmentTypeRepository;
    }
};
exports.AttachmentService = AttachmentService;
exports.AttachmentService = AttachmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attachment_file_entity_1.AttachmentFileEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(attachment_relation_entity_1.AttachmentRelationEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(attachment_type_entity_1.AttachmentTypeEntity)),
    __metadata("design:paramtypes", [Object, Object, Object])
], AttachmentService);
//# sourceMappingURL=attachment.service.js.map