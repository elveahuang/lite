import { ProductEntity } from '@/modules/product/entity/product.entity';
import { ProductRepository } from '@/modules/product/repository/product.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity) private readonly productRepository: ProductRepository) {}

    async findAll(): Promise<ProductEntity[]> {
        return this.productRepository.find();
    }
}
