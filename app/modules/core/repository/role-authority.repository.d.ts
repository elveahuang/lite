import { RoleAuthorityEntity } from '@/modules/core/entity/role-authority.entity';
import { Repository } from 'typeorm';
export interface RoleAuthorityRepository extends Repository<RoleAuthorityEntity> {
    this: Repository<RoleAuthorityEntity>;
}
export declare const CustomRoleAuthorityRepository: Pick<RoleAuthorityRepository, any>;
