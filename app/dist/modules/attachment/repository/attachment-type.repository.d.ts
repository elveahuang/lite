import { AttachmentTypeEntity } from '@/modules/attachment/domain/entity/attachment-type.entity';
import { Repository } from 'typeorm';
export interface AttachmentTypeRepository extends Repository<AttachmentTypeEntity> {
    this: Repository<AttachmentTypeEntity>;
}
export declare const AttachmentTypeRepositoryImpl: Pick<AttachmentTypeEntity, any>;
