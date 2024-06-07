import { UserEntity } from '@/modules/core/domain/entity/user.entity';
import { UserService } from '@/modules/core/service/user.service';
export declare class UserAppController {
    private readonly userService;
    constructor(userService: UserService);
    list(): Promise<UserEntity[]>;
}
