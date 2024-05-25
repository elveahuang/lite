import { IdEntity } from '@/commons/entity/id.entity';
export declare class UserSessionEntity extends IdEntity {
    userId: bigint;
    sessionId: string;
    username: string;
    ip: string;
    ua: string;
    clientId: string;
    clientVersion: string;
    startDatetime: Date;
    startYear: number;
    startMonth: number;
    startDay: number;
    startHour: number;
    startMinute: number;
    lastAccessDatetime: Date;
    lastAccessYear: number;
    lastAccessMonth: number;
    lastAccessDay: number;
    lastAccessHour: number;
    lastAccessMinute: number;
    endDatetime: Date;
    endYear: number;
    endMonth: number;
    endDay: number;
    endHour: number;
    endMinute: number;
}
