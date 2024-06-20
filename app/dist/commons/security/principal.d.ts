export interface Principal {
    readonly uid: string;
    readonly sid: string;
    readonly username: string;
    readonly nickname: string;
    readonly roles: string[];
    readonly authorities: string[];
}
