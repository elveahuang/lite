import { IdEntity } from '@/commons/entity/id.entity';
export declare abstract class BaseEntity extends IdEntity {
    active: number;
    createdAt: Date;
    createdBy: bigint;
    lastModifiedAt: Date;
    lastModifiedBy: bigint;
    deletedAt: Date;
    deletedBy: bigint;
    onBeforeInsert(): void;
    onBeforeUpdate(): void;
}
