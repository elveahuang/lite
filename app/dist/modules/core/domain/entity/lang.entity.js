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
exports.LangEntity = void 0;
const simple_entity_1 = require("../../../../commons/entity/simple.entity");
const typeorm_1 = require("typeorm");
let LangEntity = class LangEntity extends simple_entity_1.SimpleEntity {
    code;
    title;
    label;
    description;
    lang;
    country;
    defaultInd;
    status;
    source;
};
exports.LangEntity = LangEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'code', comment: '编号' }),
    __metadata("design:type", String)
], LangEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', comment: '标题' }),
    __metadata("design:type", String)
], LangEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'label', comment: '文本' }),
    __metadata("design:type", String)
], LangEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', comment: '备注' }),
    __metadata("design:type", String)
], LangEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lang', comment: '语言' }),
    __metadata("design:type", String)
], LangEntity.prototype, "lang", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'country', comment: '国家' }),
    __metadata("design:type", String)
], LangEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'default_ind', comment: '是否默认语言' }),
    __metadata("design:type", Number)
], LangEntity.prototype, "defaultInd", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', comment: '状态' }),
    __metadata("design:type", Number)
], LangEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'source', comment: '来源' }),
    __metadata("design:type", Number)
], LangEntity.prototype, "source", void 0);
exports.LangEntity = LangEntity = __decorate([
    (0, typeorm_1.Entity)('sys_lang')
], LangEntity);
//# sourceMappingURL=lang.entity.js.map