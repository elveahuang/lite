import { UserEntity } from '@/modules/core/entity/user.entity';
import { UserService } from '@/modules/core/service/user.service';
export declare class UserAdminController {
    private readonly userService;
    constructor(userService: UserService);
    list(): Promise<UserEntity[]>;
}
