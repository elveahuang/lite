import { BaseEntity } from '@/commons/entity/base.entity';
export declare class AuthorityEntity extends BaseEntity {
    parentId: bigint;
    code: string;
    title: string;
    label: string;
    description: string;
    type: string;
    idx: number;
    status: number;
    source: number;
}
