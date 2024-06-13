import { EntityService } from '@/commons/service/entity.service';
import { AttachmentTypeEntity } from '@/modules/attachment/domain/entity/attachment-type.entity';
import { AttachmentTypeRepository } from '@/modules/attachment/repository/attachment-type.repository';
export declare class AnnouncementTypeService extends EntityService<AttachmentTypeEntity, AttachmentTypeRepository> {
    readonly attachmentTypeRepository: AttachmentTypeRepository;
    constructor(attachmentTypeRepository: AttachmentTypeRepository);
}
