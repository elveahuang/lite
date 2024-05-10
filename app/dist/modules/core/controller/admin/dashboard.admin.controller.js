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
exports.DashboardAdminController = void 0;
const anonymous_decorator_1 = require("../../../../commons/decorator/anonymous.decorator");
const base_controller_1 = require("../../../../commons/web/base.controller");
const common_1 = require("@nestjs/common");
let DashboardAdminController = class DashboardAdminController extends base_controller_1.BaseController {
    constructor() {
        super();
    }
    index() {
        return { message: 'Hello world!' };
    }
};
exports.DashboardAdminController = DashboardAdminController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Get)('/dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DashboardAdminController.prototype, "index", null);
exports.DashboardAdminController = DashboardAdminController = __decorate([
    (0, common_1.Controller)('/api/admin'),
    __metadata("design:paramtypes", [])
], DashboardAdminController);
//# sourceMappingURL=dashboard.admin.controller.js.map