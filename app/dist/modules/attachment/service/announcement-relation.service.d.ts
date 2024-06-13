import { EntityService } from '@/commons/service/entity.service';
import { AttachmentRelationEntity } from '@/modules/attachment/domain/entity/attachment-relation.entity';
import { AttachmentRelationRepository } from '@/modules/attachment/repository/attachment-relation.repository';
export declare class AnnouncementRelationService extends EntityService<AttachmentRelationEntity, AttachmentRelationRepository> {
    readonly attachmentRelationRepository: AttachmentRelationRepository;
    constructor(attachmentRelationRepository: AttachmentRelationRepository);
}
