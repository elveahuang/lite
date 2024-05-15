import { IdEntity } from '@/commons/entity/id.entity';
export declare class BaseEntity extends IdEntity {
    createdAt: Date;
    lastModifiedAt: Date;
    onBeforeInsert(): void;
    onBeforeUpdate(): void;
}
