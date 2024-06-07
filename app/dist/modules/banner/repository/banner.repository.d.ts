import { BannerEntity } from '@/modules/banner/entity/banner.entity';
import { Repository } from 'typeorm';
export interface BannerRepository extends Repository<BannerEntity> {
    this: Repository<BannerEntity>;
}
export declare const BannerRepositoryImpl: Pick<BannerEntity, any>;
