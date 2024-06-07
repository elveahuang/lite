import { RequestContext } from '@/commons/web/request-context';
import { JwtPayload } from '@/modules/auth/passport/jwt.type';
import { UserSessionEntity } from '@/modules/core/domain/entity/user-session.entity';
import { UserSessionRepository } from '@/modules/core/repository/user-session.repository';
export declare class UserSessionService {
    private readonly userSessionRepository;
    constructor(userSessionRepository: UserSessionRepository);
    findAll(): Promise<UserSessionEntity[]>;
    createUserSession(payload: JwtPayload, context?: RequestContext): Promise<UserSessionEntity>;
    updateUserSession(payload: JwtPayload, context?: RequestContext): Promise<UserSessionEntity>;
    endUserSession(payload: JwtPayload, context?: RequestContext): Promise<UserSessionEntity>;
}
