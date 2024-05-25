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
exports.UserSessionEntity = void 0;
const id_entity_1 = require("../../../commons/entity/id.entity");
const typeorm_1 = require("typeorm");
let UserSessionEntity = class UserSessionEntity extends id_entity_1.IdEntity {
    userId;
    sessionId;
    username;
    ip;
    ua;
    clientId;
    clientVersion;
    startDatetime;
    startYear;
    startMonth;
    startDay;
    startHour;
    startMinute;
    lastAccessDatetime;
    lastAccessYear;
    lastAccessMonth;
    lastAccessDay;
    lastAccessHour;
    lastAccessMinute;
    endDatetime;
    endYear;
    endMonth;
    endDay;
    endHour;
    endMinute;
};
exports.UserSessionEntity = UserSessionEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id' }),
    __metadata("design:type", BigInt)
], UserSessionEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'session_id' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'username' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ua' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "ua", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_id' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'client_version' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "clientVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_datetime' }),
    __metadata("design:type", Date)
], UserSessionEntity.prototype, "startDatetime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_year', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "startYear", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_month', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "startMonth", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_day', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "startDay", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_hour', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "startHour", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_minute', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "startMinute", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_access_datetime', comment: '退出时间' }),
    __metadata("design:type", Date)
], UserSessionEntity.prototype, "lastAccessDatetime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_access_year', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "lastAccessYear", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_access_month', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "lastAccessMonth", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_access_day', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "lastAccessDay", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_access_hour', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "lastAccessHour", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_access_minute', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "lastAccessMinute", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_datetime', comment: '退出时间' }),
    __metadata("design:type", Date)
], UserSessionEntity.prototype, "endDatetime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_year', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "endYear", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_month', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "endMonth", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_day', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "endDay", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_hour', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "endHour", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_minute', comment: '退出时间' }),
    __metadata("design:type", Number)
], UserSessionEntity.prototype, "endMinute", void 0);
exports.UserSessionEntity = UserSessionEntity = __decorate([
    (0, typeorm_1.Entity)('sys_user_session')
], UserSessionEntity);
//# sourceMappingURL=user-session.entity.js.map