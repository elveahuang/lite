import { DataSource } from 'typeorm';
export declare const uuid: () => string;
export declare function log(log: any): void;
export declare const createCustomRepository: (entity: any, repository: any) => {
    provide: string | Function;
    inject: (string | Function | import("@nestjs/common").Type<DataSource>)[];
    useFactory(datasource: DataSource): any;
};
