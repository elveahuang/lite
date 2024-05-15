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
exports.UserRoleEntity = void 0;
const simple_entity_1 = require("../../../commons/entity/simple.entity");
const typeorm_1 = require("typeorm");
let UserRoleEntity = class UserRoleEntity extends simple_entity_1.SimpleEntity {
    userId;
    roleId;
};
exports.UserRoleEntity = UserRoleEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id', comment: '用户ID' }),
    __metadata("design:type", BigInt)
], UserRoleEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'role_id', comment: '角色ID' }),
    __metadata("design:type", BigInt)
], UserRoleEntity.prototype, "roleId", void 0);
exports.UserRoleEntity = UserRoleEntity = __decorate([
    (0, typeorm_1.Entity)('sys_user_role')
], UserRoleEntity);
//# sourceMappingURL=user-role.entity.js.map