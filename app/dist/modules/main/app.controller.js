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
exports.AppController = void 0;
const context_decorator_1 = require("../../commons/decorator/context.decorator");
const sequence_service_1 = require("../../commons/service/sequence.service");
const base_controller_1 = require("../../commons/web/base.controller");
const request_context_1 = require("../../commons/web/request-context");
const app_service_1 = require("./app.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AppController = class AppController extends base_controller_1.BaseController {
    configService;
    sequenceService;
    appService;
    constructor(configService, sequenceService, appService) {
        super();
        this.configService = configService;
        this.sequenceService = sequenceService;
        this.appService = appService;
    }
    index(context) {
        console.log(this.configService.get('JWT_SECRET'));
        console.log(this.sequenceService.nextId().toString());
        return { message: 'Hello world!' };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index.hbs'),
    __param(0, (0, context_decorator_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext]),
    __metadata("design:returntype", Object)
], AppController.prototype, "index", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        sequence_service_1.SequenceService,
        app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map