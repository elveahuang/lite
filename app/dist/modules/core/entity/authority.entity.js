"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityEntity = void 0;
const id_entity_1 = require("../../../commons/entity/id.entity");
const typeorm_1 = require("typeorm");
let AuthorityEntity = class AuthorityEntity extends id_entity_1.IdEntity {
};
exports.AuthorityEntity = AuthorityEntity;
exports.AuthorityEntity = AuthorityEntity = __decorate([
    (0, typeorm_1.Entity)('sys_authority')
], AuthorityEntity);
//# sourceMappingURL=authority.entity.js.map