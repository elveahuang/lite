import { IdEntity } from '@/commons/entity/id.entity';
import { BaseService } from '@/commons/service/base.service';
import { DeleteQuery, EntityKey, Page, Pagination } from '@/commons/types';
import { Repository } from 'typeorm';
export declare abstract class EntityService<T extends IdEntity, R extends Repository<T>> extends BaseService {
    private readonly repository;
    protected constructor(repository: R);
    getRepository(): R;
    findByPage(request?: Pagination): Promise<Page<T>>;
    findById(id: EntityKey): Promise<T>;
    deleteById(id: EntityKey): Promise<void>;
    softDeleteById(id: EntityKey): Promise<void>;
    batchSoftDelete(query: DeleteQuery): Promise<void>;
}
