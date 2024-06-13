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
exports.UserSessionService = void 0;
const entity_service_1 = require("../../../commons/service/entity.service");
const user_session_entity_1 = require("../domain/entity/user-session.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let UserSessionService = class UserSessionService extends entity_service_1.EntityService {
    userSessionRepository;
    constructor(userSessionRepository) {
        super(userSessionRepository);
        this.userSessionRepository = userSessionRepository;
    }
    async findAll() {
        return this.userSessionRepository.find();
    }
    async createUserSession(payload, context = {}) {
        const now = new Date();
        const session = new user_session_entity_1.UserSessionEntity();
        session.userId = payload.uid;
        session.sessionId = payload.sid;
        session.username = payload.username;
        session.ip = context?.ip || '';
        session.ua = context?.ua || '';
        session.clientId = context?.clientVersion || '';
        session.clientVersion = context?.clientVersion || '';
        session.startDatetime = now;
        session.startYear = now.getFullYear();
        session.startMonth = now.getMonth();
        session.startDay = now.getDate();
        session.startHour = now.getHours();
        session.startMinute = now.getMinutes();
        return await this.userSessionRepository.save(session);
    }
    async updateUserSession(payload, context = {}) {
        const now = new Date();
        const session = await this.userSessionRepository.findBySessionId(payload.sid);
        session.ip = context?.ip || '';
        session.ua = context?.ua || '';
        session.clientId = context?.clientVersion || '';
        session.clientVersion = context?.clientVersion || '';
        session.lastAccessDatetime = now;
        session.lastAccessYear = now.getFullYear();
        session.lastAccessMonth = now.getMonth();
        session.lastAccessDay = now.getDate();
        session.lastAccessHour = now.getHours();
        session.lastAccessMinute = now.getMinutes();
        return await this.userSessionRepository.save(session);
    }
    async endUserSession(payload, context = {}) {
        const now = new Date();
        const session = await this.userSessionRepository.findBySessionId(payload.sid);
        session.endDatetime = now;
        session.endYear = now.getFullYear();
        session.endMonth = now.getMonth();
        session.endDay = now.getDate();
        session.endHour = now.getHours();
        session.endMinute = now.getMinutes();
        return await this.userSessionRepository.save(session);
    }
};
exports.UserSessionService = UserSessionService;
exports.UserSessionService = UserSessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_session_entity_1.UserSessionEntity)),
    __metadata("design:paramtypes", [Object])
], UserSessionService);
//# sourceMappingURL=user-session.service.js.map