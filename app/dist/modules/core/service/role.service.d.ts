import { EntityService } from '@/commons/service/entity.service';
import { RoleSaveDto } from '@/modules/core/domain/dto/role-save.dto';
import { RoleEntity } from '@/modules/core/domain/entity/role.entity';
import { RoleRepository } from '@/modules/core/repository/role.repository';
export declare class RoleService extends EntityService<RoleEntity, RoleRepository> {
    readonly roleRepository: RoleRepository;
    constructor(roleRepository: RoleRepository);
    saveRole(dto: RoleSaveDto): Promise<void>;
    findByUserId(userId: bigint): Promise<RoleEntity[]>;
}
