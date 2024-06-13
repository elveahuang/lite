import { EntityKey, Page, R } from '@/commons/types';
import { BannerListDto } from '@/modules/banner/domain/dto/banner-list.dto';
import { BannerEntity } from '@/modules/banner/domain/entity/banner.entity';
import { BannerService } from '@/modules/banner/service/banner.service';
export declare class BannerAppController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    list(query: BannerListDto): Promise<R<Page<BannerEntity>>>;
    view(id: EntityKey): Promise<R<BannerEntity>>;
}
