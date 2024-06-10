import { IdEntity } from '@/commons/entity/id.entity';
import { EntityService } from '@/commons/service/entity.service';
import { EntityKey } from '@/commons/types';
import { Repository } from 'typeorm';
export declare class BaseEntityService<T extends IdEntity, R extends Repository<T>> {
    private readonly repository;
    constructor(repository: R);
    getService(): EntityService<T, R>;
    getEntityService<T extends IdEntity, R extends Repository<T>>(repository: R): EntityService<T, R>;
    deleteById(id: EntityKey): Promise<void>;
    deleteSoftById(id: EntityKey): Promise<void>;
    batchDeleteById(id: EntityKey): Promise<void>;
    batchSoftDeleteById(id: EntityKey): Promise<void>;
}
