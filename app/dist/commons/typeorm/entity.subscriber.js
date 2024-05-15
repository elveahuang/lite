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
exports.EntitySubscriber = void 0;
const id_entity_1 = require("../entity/id.entity");
const sequence_service_1 = require("../service/sequence.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let EntitySubscriber = class EntitySubscriber {
    dataSource;
    sequenceService;
    constructor(dataSource, sequenceService) {
        this.dataSource = dataSource;
        this.sequenceService = sequenceService;
        dataSource.subscribers.push(this);
    }
    beforeInsert(event) {
        if (event.entity instanceof id_entity_1.IdEntity) {
            event.entity.id = this.sequenceService.nextId();
            console.log(`EntitySubscriber.beforeInsert. generate id - ${event.entity.id}.`);
        }
    }
    beforeUpdate(event) {
        if (event.entity instanceof id_entity_1.IdEntity) {
            console.log(`EntitySubscriber.beforeUpdate. generate id - ${event.entity.id}.`);
        }
    }
};
exports.EntitySubscriber = EntitySubscriber;
exports.EntitySubscriber = EntitySubscriber = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        sequence_service_1.SequenceService])
], EntitySubscriber);
//# sourceMappingURL=entity.subscriber.js.map