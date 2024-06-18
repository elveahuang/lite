import { DeleteQuery, EntityKey, Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { UserCheckDto } from '@/modules/core/domain/dto/user-check.dto';
import { UserDetailsDto } from '@/modules/core/domain/dto/user-details.dto';
import { UserListDto } from '@/modules/core/domain/dto/user-list.dto';
import { UserSaveDto } from '@/modules/core/domain/dto/user-save.dto';
import { UserService } from '@/modules/core/service/user.service';
export declare class UserAdminController extends BaseController {
    private readonly userService;
    constructor(userService: UserService);
    check(dto: UserCheckDto): Promise<R<boolean>>;
    list(pagination: UserListDto): Promise<R<Page<UserDetailsDto>>>;
    details(id: EntityKey): Promise<R<UserDetailsDto>>;
    save(dto: UserSaveDto): Promise<R>;
    delete(dto: DeleteQuery): Promise<R>;
}
