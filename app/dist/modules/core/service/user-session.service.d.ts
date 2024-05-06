import { JwtPayload } from '@/modules/auth/passport/jwt.type';
import { UserSessionEntity } from '@/modules/core/entity/user-session.entity';
import { UserSessionRepository } from '@/modules/core/repository/user-session.repository';
export declare class UserSessionService {
    private readonly userSessionRepository;
    constructor(userSessionRepository: UserSessionRepository);
    findAll(): Promise<UserSessionEntity[]>;
    createUserSession(payload: JwtPayload): Promise<void>;
}
