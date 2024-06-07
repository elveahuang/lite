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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentFileEntity = void 0;
const base_entity_1 = require("../../../commons/entity/base.entity");
const typeorm_1 = require("typeorm");
let AttachmentFileEntity = class AttachmentFileEntity extends base_entity_1.BaseEntity {
    code;
    title;
    label;
    description;
    type;
    idx;
    status;
    source;
};
exports.AttachmentFileEntity = AttachmentFileEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'code', comment: '编号' }),
    __metadata("design:type", String)
], AttachmentFileEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', comment: '标题' }),
    __metadata("design:type", String)
], AttachmentFileEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'label', comment: '文本' }),
    __metadata("design:type", String)
], AttachmentFileEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', comment: '备注' }),
    __metadata("design:type", String)
], AttachmentFileEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', comment: '类型' }),
    __metadata("design:type", String)
], AttachmentFileEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'idx', comment: '序号' }),
    __metadata("design:type", Number)
], AttachmentFileEntity.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', comment: '状态' }),
    __metadata("design:type", Number)
], AttachmentFileEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'source', comment: '来源' }),
    __metadata("design:type", Number)
], AttachmentFileEntity.prototype, "source", void 0);
exports.AttachmentFileEntity = AttachmentFileEntity = __decorate([
    (0, typeorm_1.Entity)('sys_attachment')
], AttachmentFileEntity);
//# sourceMappingURL=attachment-file.entity.js.map