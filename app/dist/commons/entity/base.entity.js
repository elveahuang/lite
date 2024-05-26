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
exports.BaseEntity = void 0;
const id_entity_1 = require("./id.entity");
const typeorm_1 = require("typeorm");
class BaseEntity extends id_entity_1.IdEntity {
    active;
    createdAt;
    createdBy;
    lastModifiedAt;
    lastModifiedBy;
    deletedAt;
    deletedBy;
    onBeforeInsert() {
        this.createdAt = new Date();
        this.lastModifiedAt = new Date();
    }
    onBeforeUpdate() {
        this.lastModifiedAt = new Date();
    }
}
exports.BaseEntity = BaseEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'active', comment: '启用状态' }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', comment: '创建时间' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_by', comment: '创建人', type: 'bigint' }),
    __metadata("design:type", BigInt)
], BaseEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'last_modified_at', comment: '最后修改时间' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "lastModifiedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_modified_by', comment: '最后修改人', type: 'bigint' }),
    __metadata("design:type", BigInt)
], BaseEntity.prototype, "lastModifiedBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'deleted_at', comment: '删除时间' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_by', comment: '删除人', type: 'bigint' }),
    __metadata("design:type", BigInt)
], BaseEntity.prototype, "deletedBy", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseEntity.prototype, "onBeforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseEntity.prototype, "onBeforeUpdate", null);
//# sourceMappingURL=base.entity.js.map