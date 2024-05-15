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
exports.RoleAuthorityEntity = void 0;
const simple_entity_1 = require("../../../commons/entity/simple.entity");
const typeorm_1 = require("typeorm");
let RoleAuthorityEntity = class RoleAuthorityEntity extends simple_entity_1.SimpleEntity {
    authorityId;
    roleId;
};
exports.RoleAuthorityEntity = RoleAuthorityEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'authority_id', comment: '权限ID' }),
    __metadata("design:type", BigInt)
], RoleAuthorityEntity.prototype, "authorityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'role_id', comment: '角色ID' }),
    __metadata("design:type", BigInt)
], RoleAuthorityEntity.prototype, "roleId", void 0);
exports.RoleAuthorityEntity = RoleAuthorityEntity = __decorate([
    (0, typeorm_1.Entity)('sys_role_authority')
], RoleAuthorityEntity);
//# sourceMappingURL=role-authority.entity.js.map