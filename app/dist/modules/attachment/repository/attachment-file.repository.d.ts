import { AttachmentFileEntity } from '@/modules/attachment/domain/entity/attachment-file.entity';
import { Repository } from 'typeorm';
export interface AttachmentFileRepository extends Repository<AttachmentFileEntity> {
    this: Repository<AttachmentFileEntity>;
}
export declare const AttachmentFileRepositoryImpl: Pick<AttachmentFileEntity, any>;
