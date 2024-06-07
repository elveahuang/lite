import { CatalogEntity } from '@/modules/catalog/entity/catalog.entity';
import { Repository } from 'typeorm';
export interface CatalogRepository extends Repository<CatalogEntity> {
    this: Repository<CatalogEntity>;
}
export declare const CatalogRepositoryImpl: Pick<CatalogEntity, any>;
