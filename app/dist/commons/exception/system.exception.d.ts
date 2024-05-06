import { HttpException } from '@nestjs/common/exceptions/http.exception';
export declare class SystemException extends HttpException {
    constructor(code: number, message: string, data?: any);
}
