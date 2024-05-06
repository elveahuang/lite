import { UserRoleEntity } from '@/modules/core/entity/user-role.entity';
import { Repository } from 'typeorm';
export interface UserRoleRepository extends Repository<UserRoleEntity> {
    this: Repository<UserRoleEntity>;
}
export declare const CustomUserRoleRepository: Pick<UserRoleRepository, any>;
