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
exports.CatalogService = void 0;
const catalog_relation_entity_1 = require("../entity/catalog-relation.entity");
const catalog_type_entity_1 = require("../entity/catalog-type.entity");
const catalog_entity_1 = require("../entity/catalog.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let CatalogService = class CatalogService {
    catalogRepository;
    catalogRelationRepository;
    catalogTypeRepository;
    constructor(catalogRepository, catalogRelationRepository, catalogTypeRepository) {
        this.catalogRepository = catalogRepository;
        this.catalogRelationRepository = catalogRelationRepository;
        this.catalogTypeRepository = catalogTypeRepository;
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(catalog_entity_1.CatalogEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(catalog_relation_entity_1.CatalogRelationEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(catalog_type_entity_1.CatalogTypeEntity)),
    __metadata("design:paramtypes", [Object, Object, Object])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map