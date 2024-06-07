import { UserEntity } from '@/modules/core/domain/entity/user.entity';
import { UserSearchRequest } from '@/modules/core/domain/request/user-search-request';
import { UserService } from '@/modules/core/service/user.service';
export declare class UserAdminController {
    private readonly userService;
    constructor(userService: UserService);
    list(request: UserSearchRequest): Promise<UserEntity[]>;
}
