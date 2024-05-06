import { R } from '../web/response';
export declare class Web {
    static STATUS_SUCCESS: number;
    static STATUS_ERROR: number;
    static success(data?: any): R;
    static error(code?: number, message?: string, data?: any): {
        status: number;
        code: number;
        message: string;
        data?: undefined;
    } | {
        status: number;
        code: number;
        data: any;
        message: string;
    };
}
