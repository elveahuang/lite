"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const commons_module_1 = require("../../commons/commons.module");
const auth_controller_1 = require("./controller/auth.controller");
const app_guard_1 = require("./passport/app.guard");
const jwt_strategy_1 = require("./passport/jwt.strategy");
const local_strategy_1 = require("./passport/local.strategy");
const auth_service_1 = require("./service/auth.service");
const core_module_1 = require("../core/core.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    console.log(`JwtModule.useFactory...`);
                    return {
                        global: true,
                        secret: configService.get('JWT_SECRET'),
                        signOptions: { expiresIn: configService.get('JWT_ACCESS_TOKEN_EXPIRE') },
                    };
                },
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            commons_module_1.CommonsModule,
            core_module_1.CoreModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            {
                provide: core_1.APP_GUARD,
                useClass: app_guard_1.AppAuthGuard,
            },
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map