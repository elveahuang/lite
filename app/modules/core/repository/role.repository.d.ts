import { RoleEntity } from '@/modules/core/entity/role.entity';
import { Repository } from 'typeorm';
export interface RoleRepository extends Repository<RoleEntity> {
    this: Repository<RoleEntity>;
}
export declare const CustomRoleRepository: Pick<RoleRepository, any>;
