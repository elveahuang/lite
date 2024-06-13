import { BaseEntity } from '@/commons/entity/base.entity';
export declare class BannerEntity extends BaseEntity {
    title: string;
    description: string;
    idx: number;
    startDatetime: Date;
    endDatetime: Date;
    status: number;
}
