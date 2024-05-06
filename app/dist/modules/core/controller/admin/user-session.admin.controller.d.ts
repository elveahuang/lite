import { UserSessionEntity } from '@/modules/core/entity/user-session.entity';
import { UserSessionService } from '@/modules/core/service/user-session.service';
export declare class UserSessionAdminController {
    private readonly userSessionService;
    constructor(userSessionService: UserSessionService);
    list(): Promise<UserSessionEntity[]>;
}
