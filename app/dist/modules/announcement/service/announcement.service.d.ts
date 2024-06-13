import { EntityService } from '@/commons/service/entity.service';
import { AnnouncementSaveDto } from '@/modules/announcement/domain/dto/announcement-save.dto';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementRepository } from '@/modules/announcement/repository/announcement.repository';
export declare class AnnouncementService extends EntityService<AnnouncementEntity, AnnouncementRepository> {
    private readonly announcementRepository;
    constructor(announcementRepository: AnnouncementRepository);
    saveAnnouncement(dto: AnnouncementSaveDto): Promise<void>;
}
