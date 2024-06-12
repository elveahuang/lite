import { IdEntity } from '@/commons/entity/id.entity';
import { EntityService } from '@/commons/service/entity.service';
import { Repository } from 'typeorm';
export declare class BaseEntityService<T extends IdEntity, R extends Repository<T>> {
    private readonly repository;
    constructor(repository: R);
    getService(): EntityService<T, R>;
    getEntityService<T extends IdEntity, R extends Repository<T>>(repository: R): EntityService<T, R>;
}
