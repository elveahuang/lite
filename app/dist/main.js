"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_filter_1 = require("./commons/filter/http-exception.filter");
const app_module_1 = require("./modules/main/app.module");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const path_1 = require("path");
async function bootstrap() {
    console.log(`App bootstrap...`);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors({
        origin: true,
        credentials: true,
        maxAge: 1728000,
    });
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useStaticAssets({
        root: (0, path_1.join)(__dirname, '..', 'public'),
        prefix: '/',
    });
    app.setViewEngine({
        engine: { handlebars: require('handlebars') },
        templates: (0, path_1.join)(__dirname, '..', 'views'),
    });
    console.log(`App bootstrap ${__dirname}...`);
    const config = app.get(config_1.ConfigService);
    console.log(`App has been started ${config.get('PORT')}.`);
    await app.listen(config.get('PORT'), config.get('HOST'));
}
bootstrap().then(() => {
    console.log(`App has been started.`);
});
//# sourceMappingURL=main.js.map