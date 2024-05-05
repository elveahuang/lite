declare type Environment = {
    mode: string;
    debug: boolean;
    http: {
        host: string;
        port: number;
    };
    database: {
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
    };
    jwt: {
        secret: string;
        accessTokenExpire: number;
        refreshTokenExpire: number;
    };
};
export declare const loadEnv: () => Environment;
export {};
