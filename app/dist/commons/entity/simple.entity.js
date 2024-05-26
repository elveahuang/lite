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
exports.SimpleEntity = void 0;
const id_entity_1 = require("./id.entity");
const typeorm_1 = require("typeorm");
class SimpleEntity extends id_entity_1.IdEntity {
    active;
    createdAt;
    createdBy;
    onBeforeInsert() {
        this.createdAt = new Date();
    }
}
exports.SimpleEntity = SimpleEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'active', comment: 'active' }),
    __metadata("design:type", Number)
], SimpleEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', comment: '创建时间' }),
    __metadata("design:type", Date)
], SimpleEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_by', comment: '创建人', type: 'bigint' }),
    __metadata("design:type", BigInt)
], SimpleEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SimpleEntity.prototype, "onBeforeInsert", null);
//# sourceMappingURL=simple.entity.js.map