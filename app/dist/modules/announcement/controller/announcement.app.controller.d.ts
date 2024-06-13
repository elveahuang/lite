import { EntityKey, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { AnnouncementEntity } from '@/modules/announcement/domain/entity/announcement.entity';
import { AnnouncementService } from '@/modules/announcement/service/announcement.service';
import { AttachmentFileUploadDto } from '@/modules/attachment/domain/dto/attachment-file-upload.dto';
export declare class AnnouncementAppController extends BaseController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    list(dto: AttachmentFileUploadDto): Promise<R>;
    view(id: EntityKey): Promise<R<AnnouncementEntity>>;
}
