export declare type JwtPayload = {
    sub: string;
    uid: string | number | bigint;
    sid: string;
    username: string;
};
export declare type JwtResponse = {
    access_token: string;
    refresh_token: string;
};
