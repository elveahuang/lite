import { EntityService } from '@/commons/service/entity.service';
import { AttachmentFileEntity } from '@/modules/attachment/domain/entity/attachment-file.entity';
import { AttachmentFileRepository } from '@/modules/attachment/repository/attachment-file.repository';
export declare class AnnouncementFileService extends EntityService<AttachmentFileEntity, AttachmentFileRepository> {
    readonly attachmentFileRepository: AttachmentFileRepository;
    constructor(attachmentFileRepository: AttachmentFileRepository);
}
