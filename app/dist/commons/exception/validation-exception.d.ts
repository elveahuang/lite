import { ValidationItem } from '@/commons/types/validation';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
export declare class ValidationException extends HttpException {
    constructor(errors: ValidationItem[]);
}
