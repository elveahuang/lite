import { BaseEntityService } from '@/commons/service/base-entity.service';
import { Page } from '@/commons/types';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementSearchRequest } from '@/modules/announcement/domain/request/announcement-search-request';
import { AnnouncementRepository } from '@/modules/announcement/repository/announcement.repository';
export declare class AnnouncementService extends BaseEntityService {
    private readonly announcementRepository;
    constructor(announcementRepository: AnnouncementRepository);
    search(request: AnnouncementSearchRequest): Promise<AnnouncementEntity[]>;
    findAll(request?: AnnouncementSearchRequest): Promise<Page<AnnouncementEntity>>;
}
