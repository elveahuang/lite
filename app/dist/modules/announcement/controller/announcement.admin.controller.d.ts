import { DeleteQuery, EntityKey, Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { AnnouncementListDto } from '@/modules/announcement/domain/dto/announcement-list.dto';
import { AnnouncementSaveDto } from '@/modules/announcement/domain/dto/announcement-save.dto';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementService } from '@/modules/announcement/service/announcement.service';
export declare class AnnouncementAdminController extends BaseController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    list(dto: AnnouncementListDto): Promise<R<Page<AnnouncementEntity>>>;
    details(id: EntityKey): Promise<R<AnnouncementEntity>>;
    save(dto: AnnouncementSaveDto): Promise<R>;
    delete(dto: DeleteQuery): Promise<R>;
}
