import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { SchemaLike } from 'joi';
export declare class JoiValidationPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: SchemaLike);
    transform(value: any, metadata: ArgumentMetadata): any;
}
