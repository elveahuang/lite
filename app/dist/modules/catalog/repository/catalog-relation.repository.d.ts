import { CatalogRelationEntity } from '@/modules/catalog/entity/catalog-relation.entity';
import { Repository } from 'typeorm';
export interface CatalogRelationRepository extends Repository<CatalogRelationEntity> {
    this: Repository<CatalogRelationEntity>;
}
export declare const CatalogRelationRepositoryImpl: Pick<CatalogRelationEntity, any>;
