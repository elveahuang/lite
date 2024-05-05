import { IdEntity } from '@/commons/entity/id.entity';
export declare class UserSessionEntity extends IdEntity {
    userId: number;
    sessionId: string;
    username: string;
    host: string;
    ua: string;
}
