import { IdEntity } from '@/commons/entity/id.entity';
export declare class UserSessionEntity extends IdEntity {
    userId: bigint;
    sessionId: string;
    username: string;
    host: string;
    ua: string;
    lastAccessDatetime: Date;
}
