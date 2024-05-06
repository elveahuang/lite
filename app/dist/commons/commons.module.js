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
exports.CommonsModule = void 0;
const logger_service_1 = require("./service/logger.service");
const sequence_service_1 = require("./service/sequence.service");
const entity_subscriber_1 = require("./typeorm/entity.subscriber");
const common_1 = require("@nestjs/common");
let CommonsModule = class CommonsModule {
    constructor() { }
};
exports.CommonsModule = CommonsModule;
exports.CommonsModule = CommonsModule = __decorate([
    (0, common_1.Module)({
        providers: [sequence_service_1.SequenceService, logger_service_1.Logger, entity_subscriber_1.EntitySubscriber],
        exports: [sequence_service_1.SequenceService, logger_service_1.Logger, entity_subscriber_1.EntitySubscriber],
    }),
    __metadata("design:paramtypes", [])
], CommonsModule);
//# sourceMappingURL=commons.module.js.map