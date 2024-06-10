import { BaseEntityService } from '@/commons/service/base-entity.service';
import { EntityKey, Page } from '@/commons/types';
import { AnnouncementListDto } from '@/modules/announcement/domain/dto/announcement-list.dto';
import { AnnouncementSaveDto } from '@/modules/announcement/domain/dto/announcement-save.dto';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementRepository } from '@/modules/announcement/repository/announcement.repository';
export declare class AnnouncementService extends BaseEntityService<AnnouncementEntity, AnnouncementRepository> {
    private readonly announcementRepository;
    constructor(announcementRepository: AnnouncementRepository);
    save(dto: AnnouncementSaveDto): Promise<void>;
    search(request: AnnouncementListDto): Promise<AnnouncementEntity[]>;
    findById(id: EntityKey): Promise<AnnouncementEntity>;
    findAll(request?: AnnouncementListDto): Promise<Page<AnnouncementEntity>>;
}
