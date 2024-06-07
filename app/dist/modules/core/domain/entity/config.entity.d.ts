import { BaseEntity } from '@/commons/entity/base.entity';
export declare class ConfigEntity extends BaseEntity {
    code: string;
    title: string;
    label: string;
    value: string;
    defaultValue: string;
    description: string;
    source: number;
}
