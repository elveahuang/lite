import { JwtPayload } from '@/modules/auth/passport/jwt.type';
import { UserSessionRepository } from '@/modules/core/repository/user-session.repository';
export declare class UserSessionService {
    private readonly userSessionRepository;
    constructor(userSessionRepository: UserSessionRepository);
    createUserSession(payload: JwtPayload): Promise<void>;
}
