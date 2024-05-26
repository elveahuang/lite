import { IdEntity } from '@/commons/entity/id.entity';
export declare class SimpleEntity extends IdEntity {
    active: number;
    createdAt: Date;
    createdBy: bigint;
    onBeforeInsert(): void;
}
