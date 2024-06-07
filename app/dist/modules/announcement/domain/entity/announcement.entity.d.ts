import { BaseEntity } from '@/commons/entity/base.entity';
export declare class AnnouncementEntity extends BaseEntity {
    title: string;
    description: string;
    startDatetime: Date;
    endDatetime: Date;
    status: number;
}
