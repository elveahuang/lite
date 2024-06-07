import { CatalogRelationRepository } from '@/modules/catalog/repository/catalog-relation.repository';
import { CatalogTypeRepository } from '@/modules/catalog/repository/catalog-type.repository';
import { CatalogRepository } from '@/modules/catalog/repository/catalog.repository';
export declare class CatalogService {
    private readonly catalogRepository;
    private readonly catalogRelationRepository;
    private readonly catalogTypeRepository;
    constructor(catalogRepository: CatalogRepository, catalogRelationRepository: CatalogRelationRepository, catalogTypeRepository: CatalogTypeRepository);
}
