export declare type JwtPayload = {
    sub: string;
    uid: bigint;
    sid: string;
    username: string;
};
export declare type JwtResponse = {
    access_token: string;
    refresh_token: string;
};
