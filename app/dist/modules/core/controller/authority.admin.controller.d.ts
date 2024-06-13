import { DeleteQuery, EntityKey, Page, R } from '@/commons/types';
import { BaseController } from '@/commons/web/base.controller';
import { AuthorityListDto } from '@/modules/core/domain/dto/authority-list.dto';
import { AuthoritySaveDto } from '@/modules/core/domain/dto/authority-save.dto';
import { AuthorityEntity } from '@/modules/core/domain/entity/authority.entity';
import { RoleEntity } from '@/modules/core/domain/entity/role.entity';
import { AuthorityService } from '@/modules/core/service/authority.service';
export declare class AuthorityAdminController extends BaseController {
    private readonly authorityService;
    constructor(authorityService: AuthorityService);
    list(dto: AuthorityListDto): Promise<R<Page<AuthorityEntity>>>;
    view(id: EntityKey): Promise<R<RoleEntity>>;
    save(dto: AuthoritySaveDto): Promise<R>;
    delete(dto: DeleteQuery): Promise<R>;
}
