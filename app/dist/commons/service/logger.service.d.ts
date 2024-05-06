import { ConsoleLogger } from '@nestjs/common';
export declare class Logger extends ConsoleLogger {
    error(message: any, trace?: string, context?: string): void;
    warn(message: any, context?: string): void;
    log(message: any, context?: string): void;
    debug(message: any, context?: string): void;
    verbose(message: any, context?: string): void;
}
