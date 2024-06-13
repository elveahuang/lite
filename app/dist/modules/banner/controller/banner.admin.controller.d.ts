import { DeleteQuery, EntityKey, Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { BannerListDto } from '@/modules/banner/domain/dto/banner-list.dto';
import { BannerSaveDto } from '@/modules/banner/domain/dto/banner-save.dto';
import { BannerEntity } from '@/modules/banner/domain/entity/banner.entity';
import { BannerService } from '@/modules/banner/service/banner.service';
export declare class BannerAdminController extends BaseController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    list(dto: BannerListDto): Promise<R<Page<BannerEntity>>>;
    view(id: EntityKey): Promise<R<AnnouncementEntity>>;
    save(dto: BannerSaveDto): Promise<R>;
    delete(dto: DeleteQuery): Promise<R>;
}
