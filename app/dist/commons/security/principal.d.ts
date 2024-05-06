export interface Principal {
    readonly id: number | bigint;
    readonly username: string;
    readonly nickname: string;
    readonly roles: string[];
    readonly authorities: string[];
}
