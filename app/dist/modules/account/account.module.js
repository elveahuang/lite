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
exports.AccountModule = void 0;
const commons_module_1 = require("../../commons/commons.module");
const auth_module_1 = require("../auth/auth.module");
const core_module_1 = require("../core/core.module");
const common_1 = require("@nestjs/common");
let AccountModule = class AccountModule {
    constructor() { }
};
exports.AccountModule = AccountModule;
exports.AccountModule = AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [commons_module_1.CommonsModule, core_module_1.CoreModule, auth_module_1.AuthModule],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], AccountModule);
//# sourceMappingURL=account.module.js.map