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
exports.IdEntity = void 0;
const typeorm_1 = require("typeorm");
class IdEntity {
    id;
    createdAt;
    lastModifiedAt;
    onBeforeInsert() {
        this.createdAt = new Date();
        this.lastModifiedAt = new Date();
    }
    onBeforeUpdate() {
        this.lastModifiedAt = new Date();
    }
}
exports.IdEntity = IdEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', comment: 'ID', unsigned: true }),
    __metadata("design:type", BigInt)
], IdEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        comment: '创建时间',
    }),
    __metadata("design:type", Date)
], IdEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'last_modified_at',
        comment: '最后修改时间',
    }),
    __metadata("design:type", Date)
], IdEntity.prototype, "lastModifiedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IdEntity.prototype, "onBeforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IdEntity.prototype, "onBeforeUpdate", null);
//# sourceMappingURL=id.entity.js.map