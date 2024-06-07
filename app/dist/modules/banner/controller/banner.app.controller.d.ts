import { BannerEntity } from '@/modules/banner/entity/banner.entity';
import { BannerService } from '@/modules/banner/service/banner.service';
export declare class BannerAppController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    list(): Promise<BannerEntity[]>;
}
