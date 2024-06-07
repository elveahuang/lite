import { RoleEntity } from '@/modules/core/domain/entity/role.entity';
import { RoleRepository } from '@/modules/core/repository/role.repository';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: RoleRepository);
    findByUserId(userId: bigint): Promise<RoleEntity[]>;
}
