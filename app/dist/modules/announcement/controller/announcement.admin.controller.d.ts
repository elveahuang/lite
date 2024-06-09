import { Page, R } from '@/commons/types';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementDeleteRequest } from '@/modules/announcement/domain/request/announcement-delete-request';
import { AnnouncementSearchRequest } from '@/modules/announcement/domain/request/announcement-search-request';
import { AnnouncementService } from '@/modules/announcement/service/announcement.service';
export declare class AnnouncementAdminController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    search(request: AnnouncementSearchRequest): Promise<R<Page<AnnouncementEntity>>>;
    delete(request: AnnouncementDeleteRequest): Promise<R<Page<AnnouncementEntity>>>;
}
