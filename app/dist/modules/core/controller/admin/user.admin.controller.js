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
exports.UserAdminController = void 0;
const user_search_request_1 = require("../../domain/request/user-search-request");
const user_service_1 = require("../../service/user.service");
const common_1 = require("@nestjs/common");
let UserAdminController = class UserAdminController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async list(request) {
        return await this.userService.findAll();
    }
};
exports.UserAdminController = UserAdminController;
__decorate([
    (0, common_1.Post)('/search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_search_request_1.UserSearchRequest]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "list", null);
exports.UserAdminController = UserAdminController = __decorate([
    (0, common_1.Controller)('/api/admin/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserAdminController);
//# sourceMappingURL=user.admin.controller.js.map