import { Page, Pagination } from '@/commons/types';
import { SchemaLike, ValidationOptions, ValidationResult } from 'joi';
import { DataSource } from 'typeorm';
export declare const uuid: () => string;
export declare function log(log: any): void;
export declare const createCustomRepository: (entity: any, repository: any) => {
    provide: string | Function;
    inject: (string | Function | import("@nestjs/common").Type<DataSource>)[];
    useFactory(datasource: DataSource): any;
};
export declare const toPage: <T>(data: T[], total: number, request: Pagination) => Page<T>;
export declare const generateLike: (value: string) => string;
export declare const validate: <T>(value: T, schema: SchemaLike, options?: ValidationOptions) => ValidationResult<T>;
