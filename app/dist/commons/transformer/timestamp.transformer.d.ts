import { ValueTransformer } from 'typeorm';
export declare class TimestampTransformer implements ValueTransformer {
    private readonly format;
    constructor(format?: string);
    to(value: any): any;
    from(value: any): string;
}
