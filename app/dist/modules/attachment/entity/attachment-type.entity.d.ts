import { BaseEntity } from '@/commons/entity/base.entity';
export declare class AttachmentTypeEntity extends BaseEntity {
    code: string;
    title: string;
    label: string;
    description: string;
    type: string;
    idx: number;
    status: number;
    source: number;
}