import { EntityKey, Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { AnnouncementListDto } from '@/modules/announcement/domain/dto/announcement-list.dto';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementService } from '@/modules/announcement/service/announcement.service';
export declare class AnnouncementAppController extends BaseController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    list(request: AnnouncementListDto): Promise<R<Page<AnnouncementEntity>>>;
    view(id: EntityKey): Promise<R<AnnouncementEntity>>;
}
