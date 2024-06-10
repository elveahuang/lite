import { IdEntity } from '@/commons/entity/id.entity';
import { Repository } from 'typeorm/repository/Repository';
export declare class EntityService<T extends IdEntity, R extends Repository<T>> {
    private readonly repository;
    constructor(repository: R);
    getRepository(): R;
    static getInstance<T extends IdEntity, R extends Repository<T>>(repository: R): EntityService<T, R>;
}
