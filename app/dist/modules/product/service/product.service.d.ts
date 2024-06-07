import { ProductEntity } from '@/modules/product/entity/product.entity';
import { ProductRepository } from '@/modules/product/repository/product.repository';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    findAll(): Promise<ProductEntity[]>;
}
