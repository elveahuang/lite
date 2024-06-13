import { DeleteQuery, EntityKey, Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { RoleListDto } from '@/modules/core/domain/dto/role-list.dto';
import { RoleSaveDto } from '@/modules/core/domain/dto/role-save.dto';
import { RoleEntity } from '@/modules/core/domain/entity/role.entity';
import { RoleService } from '@/modules/core/service/role.service';
export declare class RoleAdminController extends BaseController {
    private readonly roleService;
    constructor(roleService: RoleService);
    list(dto: RoleListDto): Promise<R<Page<RoleEntity>>>;
    view(id: EntityKey): Promise<R<RoleEntity>>;
    save(dto: RoleSaveDto): Promise<R>;
    delete(dto: DeleteQuery): Promise<R>;
}
