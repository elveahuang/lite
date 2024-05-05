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
exports.UserEntity = void 0;
const id_entity_1 = require("../../../commons/entity/id.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity extends id_entity_1.IdEntity {
    username;
    password;
    name;
    displayName;
    email;
    mobileCountryCode;
    mobileNumber;
    idCardType;
    idCardNo;
    sex;
    birthday;
    description;
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'username', comment: '用户名' }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password', comment: '密码' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', comment: '全名' }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_name', comment: '昵称' }),
    __metadata("design:type", String)
], UserEntity.prototype, "displayName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', comment: '邮箱' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mobile_country_code', comment: '手机区号' }),
    __metadata("design:type", String)
], UserEntity.prototype, "mobileCountryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mobile_number', comment: '手机号码' }),
    __metadata("design:type", String)
], UserEntity.prototype, "mobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_card_type', comment: '证件类型' }),
    __metadata("design:type", String)
], UserEntity.prototype, "idCardType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_card_no', comment: '证件号码' }),
    __metadata("design:type", String)
], UserEntity.prototype, "idCardNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sex', comment: '性别' }),
    __metadata("design:type", String)
], UserEntity.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'birthday', comment: '生日' }),
    __metadata("design:type", String)
], UserEntity.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', comment: '备注' }),
    __metadata("design:type", String)
], UserEntity.prototype, "description", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('sys_user')
], UserEntity);
//# sourceMappingURL=user.entity.js.map