import { AttachmentFileRepository } from '@/modules/attachment/repository/attachment-file.repository';
import { AttachmentRelationRepository } from '@/modules/attachment/repository/attachment-relation.repository';
import { AttachmentTypeRepository } from '@/modules/attachment/repository/attachment-type.repository';
export declare class AttachmentService {
    private readonly attachmentFileRepository;
    private readonly attachmentRelationRepository;
    private readonly attachmentTypeRepository;
    constructor(attachmentFileRepository: AttachmentFileRepository, attachmentRelationRepository: AttachmentRelationRepository, attachmentTypeRepository: AttachmentTypeRepository);
}
