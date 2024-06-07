import { CatalogTypeEntity } from '@/modules/catalog/entity/catalog-type.entity';
import { Repository } from 'typeorm';
export interface CatalogTypeRepository extends Repository<CatalogTypeEntity> {
    this: Repository<CatalogTypeEntity>;
}
export declare const CatalogTypeRepositoryImpl: Pick<CatalogTypeEntity, any>;
