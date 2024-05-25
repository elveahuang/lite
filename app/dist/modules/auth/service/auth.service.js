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
exports.AuthService = void 0;
const service_exception_1 = require("../../../commons/exception/service.exception");
const utils_1 = require("../../../commons/utils");
const encrypt_1 = require("../../../commons/utils/encrypt");
const web_1 = require("../../../commons/utils/web");
const authority_service_1 = require("../../core/service/authority.service");
const role_service_1 = require("../../core/service/role.service");
const user_session_service_1 = require("../../core/service/user-session.service");
const user_service_1 = require("../../core/service/user.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const radash_1 = require("radash");
let AuthService = class AuthService {
    jwtService;
    configService;
    userSessionService;
    userService;
    roleService;
    authorityService;
    constructor(jwtService, configService, userSessionService, userService, roleService, authorityService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.userSessionService = userSessionService;
        this.userService = userService;
        this.roleService = roleService;
        this.authorityService = authorityService;
    }
    createAccessToken(payload) {
        return this.jwtService.sign(payload);
    }
    createRefreshToken(payload) {
        return this.jwtService.sign(payload, { expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIRE') });
    }
    hasAnyRoles(principal, roles) {
        if ((0, radash_1.isArray)(roles) && roles.length > 0) {
            return roles.some((role) => {
                return principal?.roles?.includes(role);
            });
        }
        else if ((0, radash_1.isString)(roles)) {
            return principal?.roles?.includes(roles);
        }
        return false;
    }
    hasAnyAuthorities(principal, authorities) {
        if ((0, radash_1.isArray)(authorities) && authorities.length > 0) {
            return authorities.some((role) => {
                return principal?.authorities?.includes(role);
            });
        }
        else if ((0, radash_1.isString)(authorities)) {
            return principal?.authorities?.includes(authorities);
        }
        return false;
    }
    async validate(accessToken) {
        const payload = this.jwtService.decode(accessToken);
        const uid = payload.uid;
        const sid = payload.sid;
        const roles = await this.roleService.findByUserId(uid);
        const authorities = await this.authorityService.findByUserId(uid);
        return {
            uid: uid,
            sid: sid,
            username: payload.username,
            nickname: payload.username,
            authorities: authorities.map((a) => a.code),
            roles: roles.map((r) => r.code),
        };
    }
    async auth(credentials, context = {}) {
        if ((0, radash_1.isEqual)(credentials.grant_type, 'password')) {
            const user = await this.userService.findByUsername(credentials.username);
            if (user && (await (0, encrypt_1.compare)(credentials.password, user.password))) {
                const sid = (0, utils_1.uuid)();
                const payload = {
                    sub: sid,
                    sid: sid,
                    uid: user.id,
                    username: user.username,
                };
                const roles = await this.roleService.findByUserId(user.id);
                console.log(roles.length);
                const accessToken = this.createAccessToken(payload);
                const refreshToken = this.createRefreshToken(payload);
                this.userSessionService.createUserSession(payload, context).then();
                return web_1.Web.success({
                    access_token: accessToken,
                    refresh_token: refreshToken,
                });
            }
            else {
                throw new service_exception_1.ServiceException(10000, 'Invalid username or password.');
            }
        }
        else if ((0, radash_1.isEqual)(credentials.grant_type, 'refresh_token')) {
            if (!(0, radash_1.isEmpty)(credentials.refresh_token)) {
                const payload = this.jwtService.decode(credentials.refresh_token);
                const accessToken = this.createAccessToken({
                    sid: payload.sid,
                    sub: payload.sid,
                    uid: payload.uid,
                    username: payload.username,
                });
                this.userSessionService.updateUserSession(payload).then();
                return web_1.Web.success({
                    access_token: accessToken,
                    refresh_token: credentials.refresh_token,
                });
            }
            else {
                throw new service_exception_1.ServiceException(10000, 'Invalid Refresh Token.');
            }
        }
        throw new service_exception_1.ServiceException(10000, 'Bad Request.');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        user_session_service_1.UserSessionService,
        user_service_1.UserService,
        role_service_1.RoleService,
        authority_service_1.AuthorityService])
], AuthService);
//# sourceMappingURL=auth.service.js.map