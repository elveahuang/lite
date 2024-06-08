import { Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementSearchRequest } from '@/modules/announcement/domain/request/announcement-search-request';
import { AnnouncementService } from '@/modules/announcement/service/announcement.service';
export declare class AnnouncementAppController extends BaseController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    list(request: AnnouncementSearchRequest): Promise<R<Page<AnnouncementEntity>>>;
}
