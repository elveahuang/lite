import { BaseEntity } from '@/commons/entity/base.entity';
export declare class RoleEntity extends BaseEntity {
    code: string;
    title: string;
    label: string;
    description: string;
    type: string;
    status: number;
    source: number;
}
