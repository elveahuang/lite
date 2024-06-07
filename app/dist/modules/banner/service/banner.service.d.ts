import { BannerEntity } from '@/modules/banner/entity/banner.entity';
import { BannerRepository } from '@/modules/banner/repository/banner.repository';
export declare class BannerService {
    private readonly bannerRepository;
    constructor(bannerRepository: BannerRepository);
    findAll(): Promise<BannerEntity[]>;
}
