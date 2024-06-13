import { DeleteQuery, EntityKey, Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { UserListDto } from '@/modules/core/domain/dto/user-list.dto';
import { UserSaveDto } from '@/modules/core/domain/dto/user-save.dto';
import { UserEntity } from '@/modules/core/domain/entity/user.entity';
import { UserService } from '@/modules/core/service/user.service';
export declare class UserAdminController extends BaseController {
    private readonly userService;
    constructor(userService: UserService);
    list(dto: UserListDto): Promise<R<Page<UserEntity>>>;
    view(id: EntityKey): Promise<R<UserEntity>>;
    save(dto: UserSaveDto): Promise<R>;
    delete(dto: DeleteQuery): Promise<R>;
}
