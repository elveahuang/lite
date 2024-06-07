import { UserSessionEntity } from '@/modules/core/domain/entity/user-session.entity';
import { Repository } from 'typeorm';
export interface UserSessionRepository extends Repository<UserSessionEntity> {
    this: Repository<UserSessionEntity>;
    findBySessionId(sid: string): Promise<UserSessionEntity>;
}
export declare const UserSessionRepositoryImpl: Pick<UserSessionEntity, any>;
