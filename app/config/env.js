"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnv = void 0;
const radash_1 = require("radash");
const loadEnv = () => {
    return {
        mode: process.env.MODE || 'development',
        debug: (0, radash_1.isEqual)(process.env.DEBUG, 'true'),
        http: {
            host: process.env.HOST || '127.0.0.1',
            port: parseInt(process.env.PORT) || 3000,
        },
        database: {
            host: process.env.DB_HOST || '127.0.0.1',
            port: parseInt(process.env.DB_PORT) || 3306,
            database: process.env.DB_NAME || 'lite',
            username: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || 'root',
        },
        jwt: {
            secret: process.env.JWT_SECRET || '',
            accessTokenExpire: parseInt(process.env.JWT_ACCESS_TOKEN_EXPIRE) || 60,
            refreshTokenExpire: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRE) || 60,
        },
    };
};
exports.loadEnv = loadEnv;
//# sourceMappingURL=env.js.map