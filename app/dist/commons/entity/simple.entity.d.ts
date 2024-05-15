import { IdEntity } from '@/commons/entity/id.entity';
export declare class SimpleEntity extends IdEntity {
    createdAt: Date;
    onBeforeInsert(): void;
}
