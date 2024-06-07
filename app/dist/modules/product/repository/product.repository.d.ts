import { ProductEntity } from '@/modules/product/entity/product.entity';
import { Repository } from 'typeorm';
export interface ProductRepository extends Repository<ProductEntity> {
    this: Repository<ProductEntity>;
}
export declare const ProductRepositoryImpl: Pick<ProductEntity, any>;
