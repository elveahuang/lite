import { ProductEntity } from '@/modules/product/entity/product.entity';
import { ProductService } from '@/modules/product/service/product.service';
export declare class ProductAppController {
    private readonly productService;
    constructor(productService: ProductService);
    list(): Promise<ProductEntity[]>;
}
