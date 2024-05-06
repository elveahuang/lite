import { UserSessionEntity } from '@/modules/core/entity/user-session.entity';
import { Repository } from 'typeorm';
export interface UserSessionRepository extends Repository<UserSessionEntity> {
    this: Repository<UserSessionEntity>;
}
export declare const CustomUserSessionRepository: Pick<UserSessionEntity, any>;
