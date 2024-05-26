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
exports.AppModule = void 0;
const commons_module_1 = require("../../commons/commons.module");
const env_1 = require("../../config/env");
const account_module_1 = require("../account/account.module");
const auth_module_1 = require("../auth/auth.module");
const core_module_1 = require("../core/core.module");
const api_controller_1 = require("./api.controller");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
    constructor() { }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                cache: true,
                load: [env_1.loadEnv],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    console.log(`TypeOrmModule.useFactory...`);
                    return {
                        type: 'mysql',
                        host: configService.get('DB_HOST'),
                        port: configService.get('DB_PORT'),
                        database: configService.get('DB_NAME'),
                        username: configService.get('DB_USER'),
                        password: configService.get('DB_PASSWORD'),
                        entities: [__dirname + './../**/**.entity{.ts,.js}'],
                        logging: true,
                        synchronize: false,
                    };
                },
            }),
            commons_module_1.CommonsModule,
            core_module_1.CoreModule,
            account_module_1.AccountModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController, api_controller_1.ApiController],
        providers: [app_service_1.AppService, jwt_1.JwtService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
//# sourceMappingURL=app.module.js.map