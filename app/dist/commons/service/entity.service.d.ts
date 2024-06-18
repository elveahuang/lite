import { IdEntity } from '@/commons/entity/id.entity';
import { BaseService } from '@/commons/service/base.service';
import { DeleteQuery, EntityKey, Page, Pagination } from '@/commons/types';
import { Repository } from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
export declare abstract class EntityService<T extends IdEntity, R extends Repository<T>> extends BaseService {
    private readonly repository;
    protected constructor(repository: R);
    getRepository(): R;
    searchByPage(pagination?: Pagination, options?: FindManyOptions<T>): Promise<[T[], number]>;
    findByPage(request?: Pagination): Promise<Page<T>>;
    findById(id: EntityKey): Promise<T>;
    deleteById(id: EntityKey): Promise<void>;
    softDeleteById(id: EntityKey): Promise<void>;
    batchSoftDelete(query: DeleteQuery): Promise<void>;
}
