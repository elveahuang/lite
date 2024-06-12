import { EntityKey, Page, R } from '@/commons/types';
import { BaseEntityController } from '@/commons/web/base-entity.controller';
import { AnnouncementDeleteDto } from '@/modules/announcement/domain/dto/announcement-delete.dto';
import { AnnouncementListDto } from '@/modules/announcement/domain/dto/announcement-list.dto';
import { AnnouncementSaveDto } from '@/modules/announcement/domain/dto/announcement-save.dto';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementService } from '@/modules/announcement/service/announcement.service';
export declare class AnnouncementAdminController extends BaseEntityController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    search(request: AnnouncementListDto): Promise<R<Page<AnnouncementEntity>>>;
    view(id: EntityKey): Promise<R<AnnouncementEntity>>;
    save(dto: AnnouncementSaveDto): Promise<R<Page<AnnouncementEntity>>>;
    delete(request: AnnouncementDeleteDto): Promise<R<Page<AnnouncementEntity>>>;
}
