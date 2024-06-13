"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageMinService = void 0;
const storage_service_1 = require("./storage.service");
const common_1 = require("@nestjs/common");
let StorageMinService = class StorageMinService extends storage_service_1.StorageService {
};
exports.StorageMinService = StorageMinService;
exports.StorageMinService = StorageMinService = __decorate([
    (0, common_1.Injectable)()
], StorageMinService);
//# sourceMappingURL=storage-min.service.js.map